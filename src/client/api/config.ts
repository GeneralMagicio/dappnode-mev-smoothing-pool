if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
  throw new Error('NEXT_PUBLIC_BACKEND_URL environment variable is not defined')
}

export const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const endpoints = {
  config: 'config',
  status: 'status',
  statistics: 'memory/statistics',
  allBlocks: 'memory/allblocks',
  proposedBlocks: 'memory/proposedblocks',
  registeredRelays: (validatorKey: `0x${string}`) =>
    `registeredrelays/${validatorKey}`,
  onchainProof: (address: `0x${string}`) => `onchain/proof/${address}`,
  memoryValidator: (index: number) => `memory/validator/${index}`,
  memoryValidators: (address: `0x${string}`) => `memory/validators/${address}`,
}
