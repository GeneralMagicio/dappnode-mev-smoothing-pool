import { DialogProps } from '../types'
import { useQuery } from '@tanstack/react-query'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import { fetchConfig } from '@/client/api/queryFunctions'
import { CongratulationsIcon } from '@/components/icons'
import { weiToEth } from '@/utils/web3'
import { toFixedNoTrailingZeros } from '@/utils/decimals'

export function SuccessDialog({ steps, handleClose }: DialogProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['config'],
    queryFn: fetchConfig,
  })

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Success!</h3>
        <StepProgressBar currentStep={3} steps={steps} />
      </div>
      <div className="mx-auto flex flex-col items-center gap-y-3 px-4 text-center text-lg">
        <CongratulationsIcon />
        <h4 className="font-bold">Congratulations!</h4>
        <p>You have successfully subscribed and deposited an upfront bond of</p>
        <p className="font-bold">
          {isLoading || isError ? (
            <div className="h-8 w-12 animate-pulse rounded bg-SkeletonGray" />
          ) : (
            `${toFixedNoTrailingZeros(weiToEth(data?.collateralInWei), 2)} ETH`
          )}
        </p>
        <p>to The MEV Smoothing Pool</p>
        <p>
          You are now accumulating rewards from the Smoothing Pool. Claim them
          after you successfully propose a block!
        </p>
      </div>
      <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
        Done
      </Button>
    </>
  )
}
