import { z } from 'zod'

export const BlockSchema = z.object({
  slot: z.number(),
  validatorIndex: z.number(),
  validatorKey: z.string(),
  blockType: z.string(),
  rewardWei: z.number(),
  rewardType: z.union([z.literal('mev'), z.literal('vanila')]),
  depositAddress: z.string(),
})

export const ValidatorSchema = z.object({
  status: z.string(),
  accumulatedRewardsWei: z.number(),
  pendingRewardsWei: z.number(),
  collateralWei: z.number(),
  depositAddress: z.string(),
  validatorIndex: z.number(),
  validatorKey: z.string(),
  proposedBlock: z.array(z.any()),
  missedBlocks: z.array(z.any()),
  wrongFeeBlocks: z.array(z.any()),
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
