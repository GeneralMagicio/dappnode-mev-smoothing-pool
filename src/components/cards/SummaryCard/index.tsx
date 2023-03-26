import { Tooltip } from './Tooltip'

export interface SummaryCardProps {
  bottomLeftText?: string
  bottomRightText?: string
  children?: React.ReactNode
  title: string
  tooltip?: string
}

export function SummaryCard({
  bottomLeftText,
  bottomRightText,
  children,
  title,
  tooltip,
}: SummaryCardProps) {
  return (
    <article className="h-36 max-w-xs rounded-lg bg-white px-6 py-4 font-inter shadow-card">
      <div className="mb-3 flex items-center">
        <h3 className="mr-2 text-sm font-medium leading-7 text-DAppDeep">
          {title}
        </h3>
        {tooltip && <Tooltip tooltip={tooltip} />}
      </div>
      {children}
      <div className="mt-4 flex justify-between text-sm font-light leading-7 text-DAppGray">
        <p>{bottomLeftText}</p>
        <p>{bottomRightText}</p>
      </div>
    </article>
  )
}
