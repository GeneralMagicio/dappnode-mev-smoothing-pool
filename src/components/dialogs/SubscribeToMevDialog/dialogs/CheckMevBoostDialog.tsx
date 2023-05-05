import { DialogProps } from '../types'
import { useQuery } from '@tanstack/react-query'
import { RxDotFilled } from 'react-icons/rx'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import { fetchValidatorRegisteredRelays } from '@/client/api/queryFunctions'
import { shortenEthAddress } from '@/utils/web3'

interface CheckMevBoostDialogProps extends DialogProps {
  validatorKey: `0x${string}`
}

export function CheckMevBoostDialog({
  steps,
  handleChangeDialogState,
  handleClose,
  validatorKey,
}: CheckMevBoostDialogProps) {
  const registeredRelaysQuery = useQuery({
    queryKey: ['registered-relays'],
    queryFn: () => fetchValidatorRegisteredRelays(validatorKey),
  })

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Check MevBoost</h3>
        <StepProgressBar currentStep={1} steps={steps} />
      </div>
      <div className="sm:px-6">
        {registeredRelaysQuery.isError ? (
          <div className="text-center text-red-500">
            <h4 className="font-bold">An Error has occurred</h4>
            <p>Please try again later</p>
          </div>
        ) : registeredRelaysQuery.isLoading ? (
          <>
            <h4 className="text-center">Checking MevBoost relayers...</h4>
            <div className="mx-auto mt-8 h-10 w-80 animate-pulse rounded bg-SkeletonGray" />
          </>
        ) : (
          <div>
            <div>
              <h4 className="mb-2 text-DAppNeutral/500">Your Validator</h4>
              <p className="h-8 overflow-scroll">
                {shortenEthAddress(validatorKey, 20, 20)}
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-DAppNeutral/500">Mev Boost Relayers</h4>
              {registeredRelaysQuery.isLoading ? (
                <div className="h-8 w-96 animate-pulse rounded bg-SkeletonGray" />
              ) : (
                <ul className="flex h-36 flex-col gap-y-1 overflow-scroll rounded-lg border p-1">
                  {registeredRelaysQuery.data?.correctFeeRelayers?.map(
                    ({ relayAddress }) => (
                      <li key={relayAddress} className="flex items-center">
                        <RxDotFilled className="h-6 w-6 text-green-500" />
                        {relayAddress}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      <div>
        <Button
          isDisabled={
            registeredRelaysQuery.isLoading || registeredRelaysQuery.isError
          }
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
