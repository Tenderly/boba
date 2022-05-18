import { ethers } from 'ethers'
import fetch from 'node-fetch'

export const GRAPH_API_URL: any = {
  1: {
    rollup:
      'https://api.thegraph.com/subgraphs/name/bobanetwork/mainnet-rollup',
  },
}

const getEventsFromGraph = async (
  provider: ethers.providers.Provider,
  entity: string,
  chainID: number,
  fromBlock?: number,
  toBlock?: number
): Promise<any> => {
  const response = await fetch(GRAPH_API_URL[chainID].rollup, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          ${entity}(
            orderBy: blockNumber
            orderDirection: desc
            first: 1000
            where: {
              ${fromBlock ? `blockNumber_gte: ${fromBlock}` : ''}
              ${toBlock ? `blockNumber_lte: ${toBlock}` : ''}
            }
          ) {
            id
            blockNumber
            msgHash
          }
        }
      `,
    }),
  })
  const data = await response.json()
  return data
}

const countEventsFromGraph = (entity: any, totalLength: number): number => {
  if (typeof entity.data !== 'undefined') {
    totalLength += Object.keys(entity.data).reduce((acc, cur) => {
      acc += entity.data[cur].length
      return acc
    }, 0)
  }
  return totalLength
}

export const countRelayMessageEventsFromGraph = async (
  provider: ethers.providers.Provider,
  fromBlock?: number,
  toBlock?: number
): Promise<Number | 0> => {
  const chainID = (await provider.getNetwork()).chainId
  if (!GRAPH_API_URL[chainID]) {
    return 0
  }
  const relayedMessageEntities = await getEventsFromGraph(
    provider,
    'relayedMessageEntities',
    chainID,
    fromBlock,
    toBlock
  )
  const relayedMessageFastEntities = await getEventsFromGraph(
    provider,
    'relayedMessageFastEntities',
    chainID,
    fromBlock,
    toBlock
  )
  const failedRelayedMessageEntities = await getEventsFromGraph(
    provider,
    'failedRelayedMessageEntities',
    chainID,
    fromBlock,
    toBlock
  )
  const failedRelayedMessageFastEntities = await getEventsFromGraph(
    provider,
    'failedRelayedMessageFastEntities',
    chainID,
    fromBlock,
    toBlock
  )
  let totalLength = 0
  totalLength = countEventsFromGraph(relayedMessageEntities, totalLength)
  totalLength = countEventsFromGraph(relayedMessageFastEntities, totalLength)
  totalLength = countEventsFromGraph(failedRelayedMessageEntities, totalLength)
  totalLength = countEventsFromGraph(
    failedRelayedMessageFastEntities,
    totalLength
  )
  return totalLength
}
