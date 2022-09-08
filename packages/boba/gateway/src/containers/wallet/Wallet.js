import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import Button from 'components/button/Button'

import { Info } from "@mui/icons-material"
import { Icon, Typography } from '@mui/material'

import { getETHMetaTransaction } from 'actions/setupAction'
import { openAlert, openError } from 'actions/uiAction'
import { fetchTransactions } from 'actions/networkAction'

import Token from './token/Token'
import Connect from 'containers/connect/Connect'

import * as S from './wallet.styles'
import * as G from '../Global.styles'

import {
  setConnectETH,
  setConnectBOBA
} from 'actions/setupAction'

import {
  selectAccountEnabled,
  selectLayer,
} from "selectors/setupSelector"

import { selectlayer2Balance } from 'selectors/balanceSelector'

import PageTitle from 'components/pageTitle/PageTitle'
import { isEqual } from 'lodash'

import { POLL_INTERVAL } from "util/constant"
import useInterval from "util/useInterval"

import BN from 'bignumber.js'
import { logAmount } from 'util/amountConvert.js'

import networkService from 'services/networkService'

function Wallet() {

  const [ chain, setChain ] = useState('')
  const [ tooSmallSEC, setTooSmallSEC ] = useState(false)
  const [ tooSmallBOBA, setTooSmallBOBA ] = useState(false)

  const dispatch = useDispatch()

  const layer = useSelector(selectLayer())
  const accountEnabled = useSelector(selectAccountEnabled())

  // low balance warnings
  const l2Balances = useSelector(selectlayer2Balance, isEqual)

  useEffect(()=>{
    if (accountEnabled)
      dispatch(fetchTransactions())
  },[ dispatch, accountEnabled ])

  useEffect(()=>{
    if (accountEnabled && l2Balances.length > 0)  {

      const l2BalanceSEC = l2Balances.find((i) => i.symbol === networkService.L1NativeTokenSymbol)
      const l2BalanceBOBA = l2Balances.find((i) => i.symbol === 'BOBA')

      if (l2BalanceSEC && l2BalanceSEC.balance) {
        setTooSmallSEC(new BN(logAmount(l2BalanceSEC.balance, 18)).lt(new BN(1)))
      } else {
        // in case of zero secondary token balance we are setting tooSmallSEC
        setTooSmallSEC(true)
      }
      if (l2BalanceBOBA && l2BalanceBOBA.balance) {
        setTooSmallBOBA(new BN(logAmount(l2BalanceBOBA.balance, 18)).lt(new BN(1)))
      } else {
        // in case of zero BOBA balance we are setting tooSmallBOBA
        setTooSmallBOBA(true)
      }
    }
  },[ l2Balances, accountEnabled ])

  useEffect(() => {
    if (layer === 'L2') {
      if (tooSmallBOBA && tooSmallSEC) {
        dispatch(openError(`Wallet empty - please bridge ${networkService.L1NativeTokenSymbol} or BOBA from L1`))
      }
    }
  },[tooSmallSEC, tooSmallBOBA, layer, dispatch])

  useInterval(() => {
    if (accountEnabled) {
      dispatch(fetchTransactions())
    }
  }, POLL_INTERVAL)

  useEffect(() => {
    if (layer === 'L2') {
      setChain('Boba Wallet')
    } else if (layer === 'L1') {
      setChain(`${networkService.L1ChainAsset.name} Wallet`)
    }
  }, [ layer ])


  async function emergencySwap () {
    const res = await dispatch(getETHMetaTransaction())
    console.log("emergencySwap - res:",res)
    if (res) dispatch(openAlert('Emergency Swap submitted'))
  }

  return (
    <S.PageContainer>

      <PageTitle title={'Wallet'} />

      <Connect
        userPrompt={'Connect to MetaMask to see your balances, transfer, and bridge'}
        accountEnabled={accountEnabled}
      />

      {layer === 'L2' &&
        <G.LayerAlert style={{padding: '20px'}}>
          <G.AlertInfo>
            <Icon as={Info} sx={{color:"#BAE21A"}}/>
            <Typography
              flex={4}
              variant="body2"
              component="p"
              ml={2}
              style={{ opacity: '0.6' }}
            >
              Using {networkService.L1NativeTokenSymbol} requires a minimum BOBA balance (of 1 BOBA) regardless of your fee setting,
              otherwise MetaMask may incorrectly reject transactions. If you ran out of BOBA, use
              EMERGENCY SWAP to swap BOBA for 1 BOBA at market rates.
            </Typography>
          </G.AlertInfo>
          <Button
            onClick={()=>{emergencySwap()}}
            color='primary'
            variant='outlined'
          >
            EMERGENCY SWAP
          </Button>
        </G.LayerAlert>
      }

      <S.WalletActionContainer>
        <G.PageSwitcher>
          <Typography
            className={chain === `${networkService.L1ChainAsset.name} Wallet` ? 'active' : ''}
            onClick={() => {
              if (!!accountEnabled) {
                dispatch(setConnectETH(true))
              }
            }}
            variant="body2"
            component="span">
            {`${networkService.L1ChainAsset.name} Wallet`}
          </Typography>
          <Typography
            className={chain === 'Boba Wallet' ? 'active' : ''}
            onClick={() => {
              if (!!accountEnabled) {
                dispatch(setConnectBOBA(true))
              }
            }}
            variant="body2"
            component="span">
            {`${networkService.L1ChainAsset.l2Name} Wallet`}
          </Typography>
        </G.PageSwitcher>
      </S.WalletActionContainer>
      <Token />
    </S.PageContainer>
  )
}

export default React.memo(Wallet)
