import { DialogProps } from '../types'
import { Button } from '@/components/common/Button'
import { TokenSelectorInput } from '@/components/inputs/TokenSelectorInput'

export function InitialDialog({
  handleClose,
  handleChangeDialogState,
}: DialogProps) {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold leading-8 text-DAppDeep ">
        Select token
      </h3>
      <TokenSelectorInput />
      <div className="mt-2 flex w-full items-center justify-between text-xs text-DAppDeep">
        <p>Available: </p>
        <button type="button">Max</button>
      </div>
      <div className="mt-6 flex w-full flex-col gap-y-5 rounded-lg bg-violet-50 p-4 text-sm font-normal text-DAppDeep">
        <div className="flex items-center justify-between">
          <p>Donation to DAppNode</p>
          <p>0.09 ETH</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Gas Fees</p>
          <p>0.01 ETH</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Total</p>
          <p>0.10 ETH</p>
        </div>
      </div>
      <Button
        className="mt-6"
        onPress={() => handleChangeDialogState('confirm')}>
        Donate
      </Button>
      <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
        Cancel
      </Button>
    </>
  )
}
