import clsx from 'clsx'
import { Tooltip } from '@/components/common/Tooltip'
import { toFixedNoTrailingZeros } from '@/utils/decimals'

interface MyRewardsSectionProps {
  className?: string
  icon: React.ReactNode
  rewards: number
  title: string
  tooltip: string
}

export function MyRewardsSection({
  className,
  icon,
  rewards,
  title,
  tooltip,
}: MyRewardsSectionProps) {
  return (
    <section
      className={clsx(
        'flex justify-between md:block md:border-b md:border-DAppGray/20 md:pb-4',
        className
      )}>
      <div className="flex items-center">
        <div className="hidden md:block">{icon}</div>
        <h3 className="mx-1 max-w-fit text-xs sm:text-sm md:ml-3 md:mr-2">
          {title}
        </h3>
        <Tooltip className="h-4 w-4" iconType="question" tooltip={tooltip} />
      </div>
      <p className="text-lg font-bold leading-8 md:mt-5 md:text-2xl">
        {toFixedNoTrailingZeros(rewards, 4)}
        <span className="ml-2 text-base font-normal text-DAppGray md:text-lg">
          ETH
        </span>
      </p>
    </section>
  )
}
