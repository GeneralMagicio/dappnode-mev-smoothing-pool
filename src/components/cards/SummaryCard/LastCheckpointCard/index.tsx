import { SummaryCard, SummaryCardProps } from '..'

interface LastCheckpointCardProps
  extends Pick<SummaryCardProps, 'isError' | 'isLoading'> {
  lastCheckpoint: number | undefined
  nextCheckpoint: number | undefined
}

const formatTime = (seconds: number | undefined): string => {
  if (!seconds) return '0'

  const date = new Date(0)
  date.setUTCSeconds(seconds)

  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')

  return `${hours}h ${minutes}m`
}

export function LastCheckpointCard({
  lastCheckpoint,
  nextCheckpoint,
  isError,
  isLoading,
}: LastCheckpointCardProps) {
  return (
    <SummaryCard
      bottomLeftText={`Next checkpoint: ${formatTime(nextCheckpoint)}`}
      isError={isError}
      isLoading={isLoading}
      title="Last Checkpoint"
      tooltip="Last checkpoint">
      <h4 className="text-base font-normal leading-7 text-DAppDeep ">
        {formatTime(lastCheckpoint)}
      </h4>
    </SummaryCard>
  )
}
