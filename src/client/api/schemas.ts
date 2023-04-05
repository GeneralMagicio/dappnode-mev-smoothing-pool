import { z } from 'zod'

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
