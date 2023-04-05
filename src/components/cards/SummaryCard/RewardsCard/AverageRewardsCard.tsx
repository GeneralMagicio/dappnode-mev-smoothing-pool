import { RewardsCard } from '.'

interface AverageRewardsCardProps {
  averageEthRewardWei: number | undefined
  isLoading: boolean
  isError: boolean
  spAverageEthRewardWei: number | undefined
}

export function AverageRewardsCard({
  averageEthRewardWei,
  isLoading,
  isError,
  spAverageEthRewardWei,
}: AverageRewardsCardProps) {
  return (
    <RewardsCard
      ethRewardWei={averageEthRewardWei}
      isError={isError}
      isLoading={isLoading}
      secondaryRewardTitle="SP Average"
      secondaryRewardWei={spAverageEthRewardWei}
      title="Average Rewards"
      tooltip="Average rewards over the last 30 days"
    />
  )
}
