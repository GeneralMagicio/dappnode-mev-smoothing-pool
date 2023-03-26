import { SummaryCard } from '..'
import { BsFillPersonFill } from 'react-icons/bs'

interface TotalSubscribersCardProps {
  subscribers: number
}

export function TotalSubscribersCard({
  subscribers,
}: TotalSubscribersCardProps) {
  return (
    <SummaryCard title="Total Subscribers">
      <div className="flex items-center text-DAppDeep">
        <BsFillPersonFill className="mr-2 h-[28px] w-[24px]" />
        <h4 className="text-2xl font-bold leading-8">{subscribers}</h4>
      </div>
    </SummaryCard>
  )
}
