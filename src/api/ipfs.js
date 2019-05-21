/* eslint-disable no-param-reassign */
/* eslint-disable no-control-regex */
import ipfsClient from 'ipfs-http-client'

const config = {
  "ipfs": {
    "connectConfig": { "host": "ipfs-stage.chronobank.io", "port": 443, "protocol": "https" },
    "restrictRequestsTimeout": 500
  },
  "ipfsInfura": {
    "connectConfig": { "host": "ipfs.infura.io", "port": 5001, "protocol": "https" },
    "restrictRequestsTimeout": 500
  }
}

const ipfs = ipfsClient(config.ipfs.connectConfig)

const ipfsInfura = ipfsClient(config.ipfsInfura.connectConfig)

const getJSON = async (hash) => {
  try {
    const obj = await ipfs.get(hash)
    return JSON.parse(obj[0].content.toString('utf8'))
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
    const obj = await ipfsInfura.get(hash)
    return JSON.parse(obj[0].content.toString('utf8'))
  }
}

const ipfsApi = { getJSON }

export default ipfsApi
