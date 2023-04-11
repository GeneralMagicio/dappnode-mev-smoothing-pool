import {
  InitialDialog,
  CheckMevBoostDialog,
  DepositDialog,
  SuccessDialog,
} from './dialogs'
import { BaseDialog } from '../BaseDialog'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useDialog } from '@/hooks/useDialog'
import type { IDialogStates } from './types'

const steps = ['Fee recipient', 'Check MevBoost', 'Deposit', 'Done']

interface SubscribeToMevDialogProps {
  validator: string
}

export function SubscribeToMevDialog({ validator }: SubscribeToMevDialogProps) {
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
      subtitle="Subscribe"
      triggerButtonProp="outline"
      triggerText="Subscribe">
      <AnimatePresence>
        <div className="flex h-[500px] flex-col justify-between text-DAppDeep">
          {dialogState === 'initial' ? (
            <InitialDialog
              handleChangeDialogState={setDialogState}
              handleClose={handleCloseDialog}
              steps={steps}
              validator={validator}
            />
          ) : dialogState === 'confirm' ? (
            <CheckMevBoostDialog
              handleChangeDialogState={setDialogState}
              handleClose={handleCloseDialog}
              steps={steps}
              validator={validator}
            />
          ) : dialogState === 'loading' ? (
            <DepositDialog
              handleChangeDialogState={setDialogState}
              handleClose={handleCloseDialog}
              steps={steps}
              validator={validator}
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
