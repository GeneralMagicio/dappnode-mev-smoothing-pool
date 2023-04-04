export type Warnings = 'none' | 'yellow' | 'red'

interface WarningProps {
  warning: Warnings
}

export function Warning({ warning }: WarningProps) {
  if (warning === 'none') {
    return null
  }
  return (
    <div className="flex w-fit items-center justify-center pl-5">
      <div
        className={`h-4 w-4 rounded-full border-2 border-DAppNeutral/50 ${
          warning === 'yellow' ? 'bg-DAppOrange/800' : 'bg-DAppRed'
        }`}
      />
    </div>
  )
}
