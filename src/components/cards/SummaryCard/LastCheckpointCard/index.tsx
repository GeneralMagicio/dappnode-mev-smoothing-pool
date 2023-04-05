import { SummaryCard, SummaryCardProps } from '..'

interface LastCheckpointCardProps
  extends Pick<SummaryCardProps, 'isError' | 'isLoading'> {
  lastCheckpoint: number | undefined
  nextCheckpoint: number | undefined
}

export function LastCheckpointCard({
  lastCheckpoint,
  nextCheckpoint,
  isError,
  isLoading,
}: LastCheckpointCardProps) {
  return (
    <SummaryCard
      bottomLeftText={`Next checkpoint: ${nextCheckpoint}`}
      isError={isError}
      isLoading={isLoading}
      title="Last Checkpoint"
      tooltip="Last checkpoint lorem ipsum">
      <h4 className="text-base font-normal leading-7 text-DAppDeep ">
        {lastCheckpoint}
      </h4>
    </SummaryCard>
  )
}
