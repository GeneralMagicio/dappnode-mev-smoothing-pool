import { ConfirmDialog } from './dialogs/ConfirmDialog'
import { LoadingDialog } from './dialogs/LoadingDialog'
import { SuccessDialog } from './dialogs/SuccessDialog'
import { InitialDialog } from './dialogs/InitialDialog'
import { IDialogStates } from './types'
import { BaseDialog } from '../BaseDialog'
import { useState } from 'react'
import { useDialog } from '@/hooks/useDialog'

export function ClaimRewardsDialog() {
  const { open, handleClose, handleOpenChange } = useDialog()
  const [dialogState, setDialogState] = useState<IDialogStates>('initial')

  const handleCloseDialog = () => {
    handleClose()
    setDialogState('initial')
  }

  return (
    <BaseDialog
      open={open}
      subtitle="Claim rewards"
      triggerText="Claim All"
      handleOpenChange={() => {
        handleOpenChange(!open)
      }}>
      {dialogState === 'initial' ? (
        <InitialDialog
          handleChangeDialogState={setDialogState}
          handleClose={handleCloseDialog}
        />
      ) : dialogState === 'confirm' ? (
        <ConfirmDialog
          handleChangeDialogState={setDialogState}
          handleClose={handleCloseDialog}
        />
      ) : dialogState === 'loading' ? (
        <LoadingDialog
          handleChangeDialogState={setDialogState}
          handleClose={handleCloseDialog}
        />
      ) : (
        <SuccessDialog
          handleChangeDialogState={setDialogState}
          handleClose={handleCloseDialog}
        />
      )}
    </BaseDialog>
  )
}
