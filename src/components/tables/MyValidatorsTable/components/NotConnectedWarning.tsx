import { Skeleton } from './Skeleton'
import { ConnectWalletButton } from '@/components/common/ConnectWalletButton'
import { CheckIcon } from '@/components/icons'

interface NotConnectedWarningProps {
  title: string
}

export function NotConnectedWarning({ title }: NotConnectedWarningProps) {
  return (
    <div className="relative">
      <Skeleton title={title} />
      <div className="absolute top-28 left-0 flex h-full w-full flex-col items-center">
        <CheckIcon />
        <h2 className="mt-2 text-3xl font-bold leading-[60px]">
          Join the MEV Pool and expect to earn double the rewards!
        </h2>
        <ConnectWalletButton />
      </div>
    </div>
  )
}
