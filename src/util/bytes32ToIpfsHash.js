import bs58 from 'bs58'
// const Buffer = require('safe-buffer').Buffer

const getIpfsHashFromBytes32 = (bytes32Hex) => {
  // Add our default ipfs values for first 2 bytes:
  // function:0x12=sha2, size:0x20=256 bits
  // and cut off leading "0x"`
  const hashHex = "1220" + bytes32Hex.slice(2)
  const hashBytes = Buffer.from(hashHex, 'hex');
  const hashStr = bs58.encode(hashBytes)
  return hashStr
}

const bytes32ToIPFSHash = (bytes) => {
  if (/^0x0{63}[01]$/.test(`${bytes}`)) {
    return ''
  }
  const str = Buffer.from(bytes.replace(/^0x/, '1220'), 'hex')
  return bs58.encode(str)
}

export default bytes32ToIPFSHash
