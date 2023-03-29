import { useButton, AriaButtonProps } from 'react-aria'
import { useRef } from 'react'

interface ButtonProps extends AriaButtonProps {
  isLoading?: boolean
  text: string
}

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(props, ref)
  const { text } = props

  return (
    <button
      className="w-full rounded bg-DApppurple-linear py-4 text-sm font-semibold text-white outline-none transition duration-200 hover:opacity-90 active:opacity-80 disabled:opacity-75"
      type="button"
      {...buttonProps}>
      {text}
    </button>
  )
}
