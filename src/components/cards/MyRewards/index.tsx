import { MyRewardsSection } from './MyRewardsSection'
import { Skeleton } from './Skeleton'
import { BaseCard } from '../BaseCard'
import { ClaimRewardsDialog } from '@/components/dialogs/ClaimRewardsDialog'
import {
  AccumulatedRewardsIcon,
  ClaimableRewardsIcon,
  PendingRewardsIcon,
} from '@/components/icons'

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
  return (
    <BaseCard className="mx-auto flex h-[338px] w-full max-w-md flex-col justify-between text-DAppDeep sm:h-[600px] md:h-[580px]">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <h3 className="pb-6 text-2xl font-bold leading-8 text-DAppDeep sm:mb-4 sm:border-b sm:border-DAppGray/20">
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
          <ClaimRewardsDialog
            claimableRewards={claimableRewards}
            disabledTrigger={isDisabled}
          />
        </>
      )}
    </BaseCard>
  )
}
