import type { Warnings } from './MyValidatorsTable/components/WarningIcon'

export interface Block {
  slot: number
  proposer: `0x${string}`
  rewardType: 'vanila' | 'mev'
  reward: number
}

export interface Validator {
  address: `0x${string}`
  pending: number
  validatorIndex: string
  claimable: number
  warning: Warnings
  subscribed: boolean
}

export type TableDataTypes = Validator | Block
