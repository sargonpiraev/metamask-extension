module.exports = function (tx, network, rpcPrefs) {
  if (rpcPrefs.blockExplorerUrl) {
    return `${rpcPrefs.blockExplorerUrl}/tx/${tx}`
  }

  const net = parseInt(network)
  let link
  switch (net) {
    case 1: // main net
      link = `https://etherscan.io/tx/${tx}`
      break
    case 2: // morden test net
      link = `https://morden.etherscan.io/tx/${tx}`
      break
    case 3: // ropsten test net
      link = `https://ropsten.etherscan.io/tx/${tx}`
      break
    case 4: // rinkeby test net
      link = `https://rinkeby.etherscan.io/tx/${tx}`
      break
    case 42: // kovan test net
      link = `https://kovan.etherscan.io/tx/${tx}`
      break
    case 5: // goerli test net
      link = `https://goerli.etherscan.io/tx/${tx}`
      break
    case 68: // goerli test net
      link = `https://explorer-stage.chronobank.io/tx/${tx}`
      break
    default:
      link = ''
      break
  }

  return link
}
