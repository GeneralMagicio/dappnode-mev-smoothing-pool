import { DialogProps } from '../types'
import { Button } from '@/components/common/Button'

export function InitialDialog({
  handleClose,
  handleChangeDialogState,
}: DialogProps) {
  return (
    <>
      <div className="px-10 text-center text-DAppDeep">
        <h3 className="text-2xl font-bold">Withdraw rewards</h3>
        <p className="mt-5 text-lg font-normal leading-7 tracking-wide">
          Are you sure you wish to withdraw all pool rewards to your recipient
          address?
        </p>
      </div>
      <Button
        className="mt-7"
        onPress={() => handleChangeDialogState('confirm')}>
        Yes, Proceed
      </Button>
      <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
        Cancel
      </Button>
    </>
  )
}
