import { ConfirmDialog } from './dialogs/ConfirmDialog'
import { LoadingDialog } from './dialogs/LoadingDialog'
import { SuccessDialog } from './dialogs/SuccessDialog'
import { InitialDialog } from './dialogs/InitialDialog'
import { useState } from 'react'
import { useDialog } from '@/hooks/useDialog'
import { BaseDialog } from '@/components/dialogs/BaseDialog'
import type { IDialogStates } from './types'

export function DonateDialog() {
  const { open, handleClose, handleOpenChange } = useDialog()
  const [dialogState, setDialogState] = useState<IDialogStates>('initial')

  const handleCloseDialog = () => {
    handleClose()
    setDialogState('initial')
  }

  return (
    <BaseDialog
      handleOpenChange={handleOpenChange}
      open={open}
      subtitle="Donate to DAppNode"
      triggerText="Donate now">
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
