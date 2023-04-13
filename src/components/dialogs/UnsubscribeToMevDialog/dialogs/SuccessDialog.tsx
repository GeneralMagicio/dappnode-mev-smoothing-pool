import { DialogProps } from '../types'
import { useAccount } from 'wagmi'
import { useQuery } from '@tanstack/react-query'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import { fetchOnChainProof } from '@/client/api/queryFunctions'
import { CongratulationsIcon } from '@/components/icons'
import { weiToEth } from '@/utils/web3'
import { toFixedNoTrailingZeros } from '@/utils/decimals'

export function SuccessDialog({ steps, handleClose }: DialogProps) {
  const { address } = useAccount()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['onchain-proof', address],
    queryFn: () => fetchOnChainProof(address as `0x${string}`),
    enabled: !!address,
  })

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Success!</h3>
        <StepProgressBar currentStep={3} steps={steps} />
      </div>
      <div className="mx-auto flex flex-col items-center gap-y-4 px-4 text-center text-lg">
        <CongratulationsIcon />
        <h4 className="font-bold">Congratulations!</h4>
        <p>
          You have successfully unsubscribed and withdrawn all your claimable
          rewards of
        </p>
        <p className="font-bold">
          {isLoading || isError ? (
            <div className="h-8 w-12 animate-pulse rounded bg-SkeletonGray" />
          ) : (
            `${toFixedNoTrailingZeros(
              weiToEth(data?.claimableRewardsWei || 0),
              2
            )} ETH`
          )}
        </p>
        <p>
          You can now change your fee recipient in your validator software
          without any penalties. We&apos;re sad to see you go!
        </p>
      </div>
      <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
        Done
      </Button>
    </>
  )
}
