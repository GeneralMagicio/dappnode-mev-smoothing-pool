export const baseUrl = '/api/'

export const endpoints = {
  statistics: 'memory/statistics/',
  proposedBlocks: 'memory/proposedblocks',
  validators: (address: `0x${string}`) => `memory/validators/${address}`,
}
