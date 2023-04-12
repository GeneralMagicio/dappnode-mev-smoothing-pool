import {
  InitialDialog,
  ClaimableRewardsDialog,
  WithdrawDialog,
  SuccessDialog,
} from './dialogs'
import { BaseDialog } from '../BaseDialog'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDialog } from '@/hooks/useDialog'
import type { IDialogStates } from './types'

const steps = ['Confirmation', 'Claimable rewards', 'Withdraw', 'Done']

interface UnsubscribeToMevDialogProps {
  validatorId: number
}

export function UnsubscribeToMevDialog({
  validatorId,
}: UnsubscribeToMevDialogProps) {
  const [dialogState, setDialogState] = useState<IDialogStates>('initial')

  const { open, handleOpenChange, handleClose } = useDialog()

  const handleCloseDialog = () => {
    setDialogState('initial')
    handleClose()
  }

  const handleOpenChangeDialog = (newOpen: boolean) => {
    handleOpenChange(newOpen)
    if (!newOpen) setDialogState('initial')
  }

  return (
    <BaseDialog
      handleOpenChange={handleOpenChangeDialog}
      open={open}
      subtitle="Unsubscribe and Claim rewards"
      triggerButtonProp="outline"
      triggerText="Unsubscribe">
      <AnimatePresence>
        <div className="flex h-[500px] flex-col justify-between text-DAppDeep">
          {dialogState === 'initial' ? (
            <InitialDialog
              handleChangeDialogState={setDialogState}
              handleClose={handleCloseDialog}
              steps={steps}
            />
          ) : dialogState === 'confirm' ? (
            <ClaimableRewardsDialog
              handleChangeDialogState={setDialogState}
              handleClose={handleCloseDialog}
              steps={steps}
              validatorId={validatorId}
            />
          ) : dialogState === 'loading' ? (
            <WithdrawDialog
              handleChangeDialogState={setDialogState}
              handleClose={handleCloseDialog}
              steps={steps}
              validatorId={validatorId}
            />
          ) : (
            <SuccessDialog
              handleChangeDialogState={setDialogState}
              handleClose={handleCloseDialog}
              steps={steps}
            />
          )}
        </div>
      </AnimatePresence>
    </BaseDialog>
  )
}
