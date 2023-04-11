import { DialogProps } from '../types'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import { fetchOnChainProof } from '@/client/api/queryFunctions'
import { weiToEth } from '@/utils/web3'

export function ClaimableRewardsDialog({
  steps,
  handleChangeDialogState,
  handleClose,
}: DialogProps) {
  const { address } = useAccount()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['onchain-proof', address],
    queryFn: () => fetchOnChainProof(address as `0x${string}`),
    enabled: !!address,
  })

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Claimable rewards</h3>
        <StepProgressBar currentStep={1} steps={steps} />
        {isError ? (
          <div className="mt-24 text-center text-red-500">
            <h4 className="font-bold">An Error has occurred</h4>
            <p>Please try again later</p>
          </div>
        ) : isLoading ? (
          <>
            <h4 className="mt-24 text-center">
              Checking Validator for your rewards...
            </h4>
            <div className="mx-auto mt-8 h-10 w-80 animate-pulse rounded bg-SkeletonGray" />
          </>
        ) : (
          <>
            <h4 className="mt-10 mb-4 text-center text-lg font-semibold">
              Rewards
            </h4>
            <div className="flex w-full flex-col gap-y-8 rounded-lg bg-violet-50 p-6 text-base font-normal text-DAppDeep">
              <div className="flex items-center justify-between">
                <p>Claimable Rewards</p>
                <p>{weiToEth(data?.claimableRewardsWei || 0).toFixed(2)} ETH</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Pending Rewards</p>
                <p>{weiToEth(data?.pendingRewardsWei || 0).toFixed(2)} ETH</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <Button
          className="mt-7"
          isDisabled={isLoading || isError}
          onPress={() => handleChangeDialogState('loading')}>
          Next
        </Button>
        <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
          Cancel
        </Button>
      </div>
    </>
  )
}
