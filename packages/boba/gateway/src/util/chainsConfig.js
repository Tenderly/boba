const availableChains = [
  {
    title: 'Ethereum',
    key: 'ETHEREUM'
  },
  {
    title: 'Ethereum Boba',
    key: 'ETHEREUM_BOBA'
  },
  {
    title: 'Rinkeby',
    key: 'RINKEBY'
  },
  {
    title: 'Rinkeby Boba',
    key: 'RINKEBY_BOBA'
  },

]


export const getAllChains = () => {
  return availableChains;
}
