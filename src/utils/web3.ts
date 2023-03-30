/**
 * Shorten Ethereum address to 0x123...456 format
 * @param address Ethereum address
 * @returns Formatted address string (0x123...456)
 * @example
 * formatAddress('0x1234567890123456789012345678901234567890')
 * // => '0x1234...7890'
 */
export const shortenEthAddress = (address: `0x${string}`) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`
