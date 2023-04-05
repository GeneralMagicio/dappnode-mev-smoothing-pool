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
      <BaseCard className="h-[534px] max-w-xs">
        <Skeleton />
      </BaseCard>
    )
  }

  return (
    <BaseCard className="h-[534px] max-w-xs text-DAppDeep">
      <h3 className="mb-4 border-b border-DAppGray/20 pb-6 text-2xl font-bold leading-8 text-DAppDeep">
        My Rewards
      </h3>
      <MyRewardsSection
        icon={<AccumulatedRewardsIcon />}
        rewards={totalAccumulatedRewards}
        title="Total Accumulated"
        tooltip="Total rewards earned from all your staking pools"
      />
      <MyRewardsSection
        className="my-6"
        icon={<ClaimableRewardsIcon />}
        rewards={claimableRewards}
        title="Claimable"
        tooltip="Rewards that are ready to be claimed"
      />
      <MyRewardsSection
        className="mb-8"
        icon={<PendingRewardsIcon />}
        rewards={pendingRewards}
        title="Pending"
        tooltip="Rewards that are still pending to be claimed"
      />
      <Button isDisabled={isDisabled}>Claim all</Button>
    </BaseCard>
  )
}
