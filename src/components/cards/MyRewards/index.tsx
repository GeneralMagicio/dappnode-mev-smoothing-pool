import { MyRewardsSection } from './MyRewardsSection'
import { Skeleton } from './Skeleton'
import { BaseCard } from '../BaseCard'
import {
  AccumulatedRewardsIcon,
  ClaimableRewardsIcon,
  PendingRewardsIcon,
} from '@/components/icons'
import { Button } from '@/components/common/Button'

interface MyRewardsProps {
  claimableRewards: number
  isDisabled?: boolean
  isLoading?: boolean
  pendingRewards: number
  totalAccumulatedRewards: number
}

export function MyRewards({
  claimableRewards,
  isDisabled,
  isLoading,
  pendingRewards,
  totalAccumulatedRewards,
}: MyRewardsProps) {
  if (isLoading) {
    return (
      <BaseCard className="max-w-xs">
        <Skeleton />
      </BaseCard>
    )
  }

  return (
    <BaseCard className="max-w-xs text-DAppDeep">
      <MyRewardsSection
        icon={<AccumulatedRewardsIcon />}
        rewards={totalAccumulatedRewards}
        title="Total Accumulated"
        tooltip="Total rewards earned from all your staking pools"
      />
      <MyRewardsSection
        className="my-4"
        icon={<ClaimableRewardsIcon />}
        rewards={claimableRewards}
        title="Claimable"
        tooltip="Rewards that are ready to be claimed"
      />
      <MyRewardsSection
        className="mb-6"
        icon={<PendingRewardsIcon />}
        rewards={pendingRewards}
        title="Pending"
        tooltip="Rewards that are still pending to be claimed"
      />
      <Button isDisabled={isDisabled}>Claim all</Button>
    </BaseCard>
  )
}
