import { DialogProps } from '../types'
import { useQuery } from '@tanstack/react-query'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import {
  fetchValidatorByIndex,
  fetchValidatorRegisteredRelays,
} from '@/client/api/queryFunctions'
import { shortenEthAddress } from '@/utils/web3'

interface CheckMevBoostDialogProps extends DialogProps {
  validator: string
}

export function CheckMevBoostDialog({
  steps,
  handleChangeDialogState,
  handleClose,
  validator,
}: CheckMevBoostDialogProps) {
  const validatorQuery = useQuery({
    queryKey: ['validator', validator],
    queryFn: () => fetchValidatorByIndex(validator),
  })

  const registeredRelaysQuery = useQuery({
    queryKey: ['registered-relays'],
    queryFn: () =>
      fetchValidatorRegisteredRelays(
        validatorQuery.data?.validatorKey as `0x${string}`
      ),
    enabled: !!validatorQuery.data?.validatorKey,
  })

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Check MevBoost</h3>
        <StepProgressBar currentStep={1} steps={steps} />
      </div>
      <div className="px-6">
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
          <div className="px-6">
            <div>
              <h4 className="mb-2 text-DAppNeutral/500">Your Validator</h4>
              {validatorQuery.isLoading ? (
                <div className="h-8 w-96 animate-pulse rounded bg-SkeletonGray" />
              ) : (
                <p className="h-8">
                  {shortenEthAddress(
                    validatorQuery.data?.validatorKey as `0x${string}`,
                    20,
                    20
                  )}
                </p>
              )}
            </div>
            <div className="mt-8">
              <h4 className="mb-2 text-DAppNeutral/500">Mev Boost Relayers</h4>
              {registeredRelaysQuery.isLoading ? (
                <div className="h-8 w-96 animate-pulse rounded bg-SkeletonGray" />
              ) : (
                <p>
                  {registeredRelaysQuery.data?.correctFeeRelayers
                    ?.map(({ relayAddress }) => relayAddress)
                    .join(', ')}
                </p>
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
