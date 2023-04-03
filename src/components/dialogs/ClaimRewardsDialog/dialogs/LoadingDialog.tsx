import { DialogProps } from '../types'
import { useEffect } from 'react'
import { Button } from '@/components/common/Button'

export function LoadingDialog({
  handleClose,
  handleChangeDialogState,
}: DialogProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleChangeDialogState('success')
    }, 3000)
    return () => clearTimeout(timer)
  }, [handleChangeDialogState])

  return (
    <>
      <div className="px-10 text-center text-DAppDeep">
        <h3 className="text-lg font-normal">You are withdrawing</h3>
        <p className="mt-4 text-2xl font-bold">0.0578 ETH ~ 245.50 USD </p>
        <p className="mt-4 text-lg font-normal tracking-wide">
          to your recipient wallet address
        </p>
      </div>
      <Button
        isDisabled
        className="mt-7"
        onPress={() => handleChangeDialogState('success')}>
        Yes, Proceed
      </Button>
      <Button
        isDisabled
        buttonType="secondary"
        className="mt-4"
        onPress={handleClose}>
        Cancel
      </Button>
    </>
  )
}
