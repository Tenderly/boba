#!/usr/bin/env node

const ethers = require('ethers')
const DatabaseService = require('./database.service')
const OptimismEnv = require('./utilities/optimismEnv')
const fetch = require('node-fetch')
const { sleep } = require('@eth-optimism/core-utils')
const { Logger } = require('@eth-optimism/common-ts')

const EthBridgeJson = require('@boba/contracts/artifacts/contracts/lzTokenBridge/EthBridge.sol/EthBridge.json')
const AltL1Bridge = require('@boba/contracts/artifacts/contracts/lzTokenBridge/AltL1Bridge.sol/AltL1Bridge.json')

const layerZeroMainnetAddresses = require('@boba/register/addresses/layerZeroMainnet.json')
const layerZeroTestnetAddresses = require('@boba/register/addresses/layerZeroTestnet.json')

const prefix = '[layer_zero_bridge]'
class LayerZeroBridgeMonitor extends OptimismEnv {
  constructor() {
    super(...arguments)

    this.databaseService = new DatabaseService()

    const layerZeroAddresses = this.layerZeroEnableTest
      ? layerZeroTestnetAddresses
      : layerZeroMainnetAddresses;

    if (layerZeroAddresses.BOBA_Bridges[this.layerZeroChain] === undefined) {
      throw new Error(
        `Unable to find bridge address for ${this.layerZeroChain}`
      )
    }

    this.chainInfo = {
      bridgeAddress:
        layerZeroAddresses.BOBA_Bridges[this.layerZeroChain][
        this.layerZeroBridge
        ],
      latestBlock: this.layerZeroLatestBlock,
      chainID:
        layerZeroAddresses.Layer_Zero_Protocol[this.layerZeroChain]
          .Layer_Zero_ChainId,
    }
    console.log(
      prefix,
      `monitoring ${this.layerZeroChain} with ${JSON.stringify(this.chainInfo)}`
    )
    this.isETH = this.layerZeroChain.search(/EthBridgeTo/) === 0
    this.latestBlock = 0
    this.currentBlock = this.chainInfo.latestBlock
    this.chainID = this.chainInfo.chainID

    const abi = this.isETH ? EthBridgeJson.abi : AltL1Bridge.abi
    this.bridgeContract = new ethers.Contract(
      this.chainInfo.bridgeAddress,
      abi,
      this.L1Provider
    )
  }

  async initScan() {
    console.log(prefix, `init MySQL`)
    // Create tables
    await this.databaseService.initMySQL()
    const destChain = await this.bridgeContract.dstChainId();
    console.log(
      prefix,
      `monitor bridge ${this.chainInfo.bridgeAddress} with dstChainID ${destChain}`
    )

    const maxBlockFromDB = await this.databaseService.getNewestBlockFromLayerZeroTx(this.chainID)
    this.currentBlock = this.currentBlock > maxBlockFromDB ? this.currentBlock : maxBlockFromDB

    this.latestBlock = await this.L1Provider.getBlockNumber()
    console.log(prefix, `latestBlock ${this.latestBlock}`)

    if (this.currentBlock < this.latestBlock) {
      await this.scanBlockRange(this.currentBlock, this.latestBlock)
    }
  }

  async startMonitor() {
    console.log(prefix, `start monitor`)
    this.latestBlock = await this.L1Provider.getBlockNumber()

    if (this.currentBlock < this.latestBlock) {
      await this.scanBlockRange(this.currentBlock, this.latestBlock)
    }
  }

  async scanBlockRange(startBlock, endBlock) {
    console.log(prefix, `scan from block ${startBlock} to block ${endBlock}`)
    for (let i = startBlock; i <= endBlock; i += 1000) {
      const upperBlock = Math.min(i + 999, endBlock)
      console.log(prefix, `scan blockRange`, i, upperBlock)

      await this.scanBlock(i, upperBlock)
      this.currentBlock = upperBlock

      await sleep(1000)
    }
  }

  async scanBlock(startBlock, endBlock) {
    const logs = await this.bridgeContract.queryFilter(
      this.isETH
        ? [
          this.bridgeContract.filters.ERC20DepositInitiated(),
          this.bridgeContract.filters.ERC20WithdrawalFinalized(),
        ]
        : [
          this.bridgeContract.filters.WithdrawalInitiated(),
          this.bridgeContract.filters.DepositFinalized(),
        ],
      Number(startBlock),
      Number(endBlock)
    )

    for (const l of logs) {
      const tx = await l.getTransaction()
      const eventData = {
        chainID: this.chainID,
        hash: l.transactionHash,
        blockHash: l.blockHash,
        blockNumber: l.blockNumber,
        txFrom: tx.from,
        txTo: tx.to,
        l1Token: l.args._l1Token,
        l2Token: l.args._l2Token,
        crossTxFrom: l.args._from,
        crossTxTo: l.args._to,
        amount: l.args._amount,
        event: l.event,
      }

      await this.databaseService.insertLayerZeroTx(eventData)
    }
  }



  errorCatcher(func, param) {
    return (async () => {
      for (let i = 0; i < 2; i++) {
        try {
          return await func(param)
        } catch (error) {
          console.log(`${func}returned an error!`, error)
          await sleep(1000)
        }
      }
    })()
  }
}

module.exports = LayerZeroBridgeMonitor
