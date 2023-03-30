import { useButton, AriaButtonProps } from 'react-aria'
import { useRef } from 'react'
import clsx from 'clsx'

interface ButtonProps extends AriaButtonProps {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
  buttonType?: 'primary' | 'secondary' | 'warning'
}

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { buttonType = 'primary', children, className } = props

  return (
    <button
      type="button"
      className={clsx(
        'w-full rounded py-4 px-8 text-sm font-semibold outline-none transition duration-200 hover:opacity-90 active:opacity-80 disabled:opacity-75',
        buttonType === 'primary'
          ? 'bg-DApppurple-linear text-white '
          : buttonType === 'secondary'
          ? 'border-2 border-DAppGray bg-white text-DAppDarkGray'
          : 'bg-red-500 text-white ',
        className
      )}
      {...buttonProps}>
      {children}
    </button>
  )
}
