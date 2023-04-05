import { TotalSubscribersCard } from '../cards/SummaryCard/TotalSubscribersCard'
import { AverageRewardsCard } from '../cards/SummaryCard/RewardsCard/AverageRewardsCard'
import { TotalRewardsCard } from '../cards/SummaryCard/RewardsCard/TotalRewardsCard'
import { LastCheckpointCard } from '../cards/SummaryCard/LastCheckpointCard'
import { useQuery } from '@tanstack/react-query'
import { fetchStatistics } from '@/client/api/queryFunctions'

export function Statistics() {
  const { data, isLoading, isError } = useQuery(['statistics'], fetchStatistics)
  return (
    <div className="flex w-full items-center justify-between gap-x-6">
      <TotalSubscribersCard
        isError={isError}
        isLoading={isLoading}
        subscribers={data?.totalSubscribedValidators}
      />
      <AverageRewardsCard
        averageEthRewardWei={data?.avgBlockRewardWei}
        isError={isError}
        isLoading={isLoading}
        spAverageEthRewardWei={data?.avgBlockRewardWei}
      />
      <TotalRewardsCard
        isError={isError}
        isLoading={isLoading}
        lastSevenDaysEthRewardWei={data?.totalRewardsSentWei}
        totalEthRewardWei={data?.totalRewardsSentWei}
      />
      <LastCheckpointCard
        isError={isError}
        isLoading={isLoading}
        lastCheckpoint={data?.latestCheckpointSlot}
        nextCheckpoint={data?.nextCheckpointSlot}
      />
    </div>
  )
}
