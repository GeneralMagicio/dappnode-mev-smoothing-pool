import { AiOutlineInfoCircle } from 'react-icons/ai'
import * as RadixTooltip from '@radix-ui/react-tooltip'

interface TooltipProps {
  tooltip: string
}

export function Tooltip({ tooltip }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={300}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <button type="button">
            <AiOutlineInfoCircle className="h-[17px] w-[17px] text-DAppDeep" />
          </button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="max-w-[140px] rounded-lg bg-white p-3 shadow"
            sideOffset={5}>
            {tooltip}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
