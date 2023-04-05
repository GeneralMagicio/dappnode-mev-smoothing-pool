import { RewardsCard } from '.'

interface TotalRewardsCardProps {
  totalEthRewardWei: number | undefined
  isLoading: boolean
  isError: boolean
  lastSevenDaysEthRewardWei: number | undefined
}

export function TotalRewardsCard({
  totalEthRewardWei,
  isLoading,
  isError,
  lastSevenDaysEthRewardWei,
}: TotalRewardsCardProps) {
  return (
    <RewardsCard
      ethRewardWei={totalEthRewardWei}
      isError={isError}
      isLoading={isLoading}
      secondaryRewardTitle="Last 7 days"
      secondaryRewardWei={lastSevenDaysEthRewardWei}
      title="Total Rewards"
      tooltip="Total rewards over the last 30 days"
    />
  )
}
