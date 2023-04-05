import clsx from 'clsx'
import { Tooltip } from '@/components/common/Tooltip'

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
    <section className={clsx('border-b border-DAppGray/20 pb-4', className)}>
      <div className="flex items-center">
        {icon}
        <h3 className="ml-3 mr-2 text-sm">{title}</h3>
        <Tooltip
          className="h-[20px] w-[20px]"
          iconType="question"
          tooltip={tooltip}
        />
      </div>
      <p className="mt-5 text-2xl font-bold leading-8">
        {rewards}
        <span className="ml-2 text-lg font-normal text-DAppGray">ETH</span>
      </p>
    </section>
  )
}
