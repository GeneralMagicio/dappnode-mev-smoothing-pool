import { useButton, AriaButtonProps } from 'react-aria'
import { useRef } from 'react'
import clsx from 'clsx'

interface ButtonProps extends AriaButtonProps {
  children: React.ReactNode
  color?: 'red' | 'blue' | 'linear-purple' | 'gray'
  className?: string
  isLoading?: boolean
  buttonType?: 'primary' | 'secondary' | 'tertiary'
}

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const {
    buttonType = 'primary',
    children,
    className,
    color = 'linear-purple',
  } = props

  return (
    <button
      type="button"
      className={clsx(
        'w-full rounded py-4 px-8 text-sm font-semibold outline-none transition duration-200 hover:opacity-90 active:opacity-80 disabled:opacity-75',
        buttonType === 'primary' && 'text-white',
        buttonType === 'secondary' && 'border-2  bg-white',
        buttonType === 'tertiary' && 'border-none bg-white',
        colors[color][buttonType],
        className
      )}
      {...buttonProps}>
      {children}
    </button>
  )
}

const colors = {
  'linear-purple': {
    primary: 'bg-DApppurple-linear',
    secondary: 'border-DAppPurple/900 text-DAppPurple/900',
    tertiary: 'text-DAppPurple/900',
  },
  red: {
    primary: 'bg-DAppRed',
    secondary: 'border-DAppRed text-DAppRed',
    tertiary: 'text-DAppRed',
  },
  blue: {
    primary: 'bg-DAppBlue',
    secondary: 'border-DAppBluetext-DAppBlue',
    tertiary: 'text-DAppBlue',
  },
  gray: {
    primary: 'bg-DAppGray',
    secondary: 'border-DAppGray text-DAppDarkGray ',
    tertiary: 'text-DAppGray',
  },
}
