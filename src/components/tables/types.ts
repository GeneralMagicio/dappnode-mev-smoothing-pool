import type { Warnings } from './MyValidatorsTable/components/WarningIcon'

export interface Validator {
  address: `0x${string}`
  pending: number
  claimable: number
  warning: Warnings
  subscribed: boolean
}

export type TableDataTypes = Validator
