import * as Select from '@radix-ui/react-select'
import { RxTriangleDown } from 'react-icons/rx'
import { FiCheck } from 'react-icons/fi'
import { SetStateAction, Dispatch } from 'react'

interface SelectorProps {
  tokens: string[]
  value: string
  onValueChange: Dispatch<SetStateAction<string>>
}

export function Selector({ tokens, value, onValueChange }: SelectorProps) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        aria-label="Token"
        className="flex items-center gap-x-2 rounded-lg py-3 pl-4 pr-3 text-base text-DAppDeep focus:outline-none">
        <Select.Value placeholder={tokens[0]} />
        <Select.Icon>
          <RxTriangleDown className="h-[18px] w-[18px]" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.Viewport className="flex w-44 flex-col gap-y-3 rounded-lg bg-white p-4">
            {tokens.map((token) => (
              <Select.Item
                key={token}
                className="flex cursor-pointer items-center justify-between rounded-lg py-2 px-4 focus:bg-DAppLight focus:outline-none"
                value={token}>
                <Select.ItemText className="text-base text-DAppDeep">
                  {token}
                </Select.ItemText>
                <Select.ItemIndicator>
                  <FiCheck className="text-DAppPurple/900" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
