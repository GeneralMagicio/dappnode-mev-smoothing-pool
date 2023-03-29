import { SummaryCard, type SummaryCardProps } from '..'
import { FaEthereum } from 'react-icons/fa'

interface RewardsCardProps
  extends Omit<
    SummaryCardProps,
    'children' | 'bottomLeftText' | 'bottomRightText'
  > {
  ethReward: number
  secondaryRewardTitle: string
  secondaryReward: number
}

export function RewardsCard({
  isError,
  isLoading,
  title,
  secondaryRewardTitle,
  secondaryReward,
  tooltip,
  ethReward,
}: RewardsCardProps) {
  return (
    <SummaryCard
      bottomLeftText={secondaryRewardTitle}
      bottomRightText={`${String(secondaryReward)} ETH`}
      isError={isError}
      isLoading={isLoading}
      title={title}
      tooltip={tooltip}>
      <div className="flex items-center">
        <FaEthereum className="mr-2 h-[24px] w-[14px] text-DAppDeep" />
        <div className="flex items-baseline">
          <h4 className="mr-1 text-2xl font-bold leading-8 text-DAppDeep">
            {ethReward}
          </h4>
          <h5 className="text-lg font-normal leading-6 text-DAppGray">ETH</h5>
        </div>
      </div>
    </SummaryCard>
  )
}
