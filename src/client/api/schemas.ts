import { z } from 'zod'

export const BlockSchema = z.object({
  slot: z.number(),
  validatorIndex: z.number(),
  validatorKey: z.string(),
  blockType: z.union([
    z.literal('okpoolproposal'),
    z.literal('missedproposal'),
    z.literal('wrongfeerecipient'),
  ]),
  rewardWei: z.number(),
  rewardType: z.union([z.literal('mev'), z.literal('vanila')]),
  withdrawalAddress: z.string(),
})

export const ValidatorSchema = z.object({
  status: z.string(),
  accumulatedRewardsWei: z.number().or(z.null()),
  pendingRewardsWei: z.number().or(z.null()),
  collateralWei: z.number().or(z.null()),
  withdrawalAddress: z.string(),
  validatorIndex: z.number(),
  validatorKey: z.string(),
  proposedBlock: z.array(z.any()).or(z.null()),
  missedBlocks: z.array(z.any()).or(z.null()),
  wrongFeeBlocks: z.array(z.any()).or(z.null()),
})

export const StatisticsSchema = z.object({
  totalSubscribedValidators: z.number(),
  totalActiveValidators: z.number(),
  totalYellowcardValidators: z.number(),
  totalRedcardValidators: z.number(),
  totalBannedValidators: z.number(),
  totalNotsubscribedValidators: z.number(),
  latestCheckpointSlot: z.number(),
  nextCheckpointSlot: z.number(),
  totalAccumulatedRewardsWei: z.number(),
  totalPendingRewardsWei: z.number(),
  totalRewardsSentWei: z.number(),
  totalDonationsWei: z.number(),
  avgBlockRewardWei: z.number(),
  totalProposedBlocks: z.number(),
  totalMissedBlocks: z.number(),
  totalWrongfeeBlocks: z.number(),
})

export const onChainProofSchema = z.object({
  leafWithdrawalAddress: z.string(),
  leafAccumulatedBalance: z.number(),
  merkleroot: z.string(),
  checkpointSlot: z.number(),
  merkleProofs: z.array(z.string()),
  registeredValidators: z.array(z.number()),
  totalAccumulatedRewardsWei: z.number().or(z.null()),
  alreadyClaimedRewardsWei: z.number().or(z.null()),
  claimableRewardsWei: z.number().or(z.null()),
  pendingRewardsWei: z.number().or(z.null()),
})

export const ConfigSchema = z.object({
  consensusEndpoint: z.string(),
  executionEndpoint: z.string(),
  network: z.string(),
  poolAddress: z.string(),
  updaterAddress: z.string(),
  deployedSlot: z.number(),
  checkpointSize: z.number(),
  poolFeesPercent: z.number(),
  poolFeesAddress: z.string(),
  dryRun: z.boolean(),
  numRetries: z.number(),
  collateralInWei: z.number(),
})

const relayerSchema = z.object({
  relayAddress: z.string(),
  feeRecipient: z.string(),
  timestamp: z.string(),
})

export const registeredRelaysSchema = z.object({
  correctFeeRecipients: z.boolean().optional(),
  correctFeeRelayers: z.array(relayerSchema).or(z.null()).optional(),
  wrongFeeRelayers: z.array(relayerSchema).or(z.null()).optional(),
  unregisteredRelayers: z.array(relayerSchema).or(z.null()).optional(),
})
