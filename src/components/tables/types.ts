import type { Warnings } from './MyValidatorsTable/components/WarningIcon'

export interface Block {
  slot: number
  proposer: `0x${string}`
  rewardType: 'vanila' | 'mev'
  reward: number
  blockType: 'okpoolproposal' | 'missedproposal' | 'wrongfeerecipient'
}

export interface Validator {
  address: `0x${string}`
  pending: number
  validatorId: number
  validatorKey: `0x${string}`
  claimable: number
  warning: Warnings
  subscribed: boolean
}

export type TableDataTypes = Validator | Block
