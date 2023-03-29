import { SummaryCard, SummaryCardProps } from '..'
import { subtractDates } from '@/utils/dateTime'

interface LastCheckpointCardProps
  extends Pick<SummaryCardProps, 'isError' | 'isLoading'> {
  nextCheckpointDate: Date
  lastCheckpointDate: Date
}

export function LastCheckpointCard({
  isError,
  isLoading,
  nextCheckpointDate,
  lastCheckpointDate,
}: LastCheckpointCardProps) {
  const nextCheckpointString = subtractDates(
    new Date(nextCheckpointDate),
    new Date(),
    'hh:mm:ss'
  )
  // convert lastCheckpointDate to 'dddd MMM DD YYYY HH:mm:ss Z'
  const options = {
    weekday: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short',
  } as const
  const lastCheckpointString = new Date(lastCheckpointDate)
    .toLocaleString('en-DE', options)
    .replace(',', ' at ')

  return (
    // Add tooltip prop to SummaryCard
    <SummaryCard
      bottomLeftText={`Next in: ${nextCheckpointString}`}
      isError={isError}
      isLoading={isLoading}
      title="Last Checkpoint"
      tooltip="Last checkpoint lorem ipsum">
      <h4 className="text-base font-normal leading-7 text-DAppDeep ">
        {lastCheckpointString}
      </h4>
    </SummaryCard>
  )
}
