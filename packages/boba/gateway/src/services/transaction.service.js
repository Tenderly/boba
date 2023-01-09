import etherScanInstance from "api/etherScanAxios";
import omgxWatcherAxiosInstance from "api/omgxWatcherAxios";
import networkService from "./networkService";


class TransactionService {


  // fetch L1 transactions from EtherScan
  async fetchEtherscanTx() {
    let L1Txs = [];
    try {
      const BEUrl = networkService.networkConfig[ networkService.L1orL2 ].blockExplorer;
      const responseL1 = await etherScanInstance(BEUrl).get(`&address=${networkService.account}`)
      if (responseL1.status === 200) {
        const transactionsL1 = await responseL1.data
        if (transactionsL1.status === '1') {
          //thread in ChainID
          L1Txs = transactionsL1.result.map(v => ({
            ...v,
            blockNumber: parseInt(v.blockNumber), //fix bug - sometimes this is string, sometimes an integer
            timeStamp: parseInt(v.timeStamp),     //fix bug - sometimes this is string, sometimes an integer
            chain: 'L1'
          }))
        }
      }
      return L1Txs
    } catch (error) {
      console.log('TS: Error while fetching txs')

      return L1Txs
    }
  }
  // fetch L2 transactions from omgxWatcherAxiosInstance
  async fetchL2Tx() {
    let L2Txs = [];
    try {
      const responseL2 = await omgxWatcherAxiosInstance(networkService.networkConfig)
        .post('get.l2.transactions', {
          address: networkService.account,
          fromRange: 0,
          toRange: 1000,
        }).catch((error) => { console.log('get l2 tx', error) })

      if (responseL2.status === 201) {
        L2Txs = responseL2.data.map(v => ({ ...v, chain: 'L2' }))
      }
      return L2Txs
    } catch (error) {
      console.log('TS: Error while fetching txs')
      return L2Txs
    }
  }

  // fetch L0 transactions from omgxWatcherAxiosInstance
  async fetchL0Tx() {
    let L0Txs = [];
    try {
      const responseL0 = await omgxWatcherAxiosInstance(networkService.networkConfig)
        .post('get.layerzero.transactions', {
          address: networkService.account,
          fromRange: 0,
          toRange: 1000,
        })

      if (responseL0.status === 201) {
        L0Txs = responseL0.data.map((v) => ({
          ...v,
          hash: v.tx_hash,
          blockNumber: parseInt(v.block_number),
          timeStamp: parseInt(v.timestamp),     //fix bug - sometimes this is string, sometimes an integer
          chain: 'L0',
          altL1: true,
        }))
      }
      return L0Txs
    } catch (error) {
      console.log('TS: Error while fetching txs')
      return L0Txs
    }
  }

  // fetch L1 pending transactions from omgxWatcherAxiosInstance
  async fetchL1PendingTx() {
    let txL1pending = [];
    try {
      const responseL1pending = await omgxWatcherAxiosInstance(networkService.networkConfig)
        .post('get.l1.transactions', {
          address: networkService.account,
          fromRange: 0,
          toRange: 1000,
        })

      if (responseL1pending.status === 201) {
        //add the chain: 'L1pending' field
        txL1pending = responseL1pending.data.map(v => ({ ...v, chain: 'L1pending' }))
      };
      return txL1pending
    } catch (error) {
      console.log('TS: Error while fetching txs')
      return txL1pending
    }
  }

  /**
   * @getTransactions
   *   - loads L1Txs, l2Txs, l0Txs, L1PendingTxs
   *
  */
  async getTransactions() {
    const result = await Promise.all([
      this.fetchEtherscanTx(),
      this.fetchL2Tx(),
      this.fetchL0Tx(),
      this.fetchL1PendingTx()
    ])
    return result.reduce((acc, res) => [ ...acc, ...res ], [])
  }

};


const transctionService = new TransactionService();

export default transctionService;
