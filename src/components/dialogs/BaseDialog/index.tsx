import * as Dialog from '@radix-ui/react-dialog'
import { IoClose } from 'react-icons/io5'

interface BaseDialogProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function BaseDialog({ children, subtitle, title }: BaseDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-gray-600 opacity-30" />
        <Dialog.Content className="fixed top-[50%] left-[50%] w-[500px] max-w-[85%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6">
          <div className="flex w-full justify-between">
            <h4 className="text-lg font-normal text-DAppDeep">{subtitle}</h4>
            <Dialog.Close asChild>
              <button aria-label="Close" type="button">
                <IoClose className="h-6 w-6 text-DAppDeep" />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="mt-8 text-2xl font-bold leading-8 text-DAppDeep">
            {title}
          </Dialog.Title>
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
