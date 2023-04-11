import { DialogProps } from '../types'
import { useQuery } from '@tanstack/react-query'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import {
  fetchConfig,
  fetchValidatorByIndex,
  fetchValidatorRegisteredRelays,
} from '@/client/api/queryFunctions'
import { shortenEthAddress } from '@/utils/web3'

interface InitialDialogProps extends DialogProps {
  validator: string
}

export function InitialDialog({
  steps,
  handleChangeDialogState,
  handleClose,
  validator,
}: InitialDialogProps) {
  const configQuery = useQuery({
    queryKey: ['config'],
    queryFn: fetchConfig,
  })
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
        <h3 className="mb-6 text-left text-2xl font-bold">Warning</h3>
        <StepProgressBar currentStep={0} steps={steps} />
      </div>
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
          <h4 className="mb-2 text-DAppNeutral/500">
            Current Fee Recipient address
          </h4>
          {registeredRelaysQuery.isLoading ? (
            <div className="h-8 w-96 animate-pulse rounded bg-SkeletonGray" />
          ) : (
            <p className="h-8">
              {registeredRelaysQuery.data?.correctFeeRelayers?.[0].feeRecipient}
            </p>
          )}
        </div>
        <div className="mt-8">
          <h4 className="mb-2 text-DAppNeutral/500">
            NEW Fee Recipient address
          </h4>
          {configQuery.isLoading ? (
            <div className="h-8 w-96 animate-pulse rounded bg-SkeletonGray" />
          ) : (
            <p className="h-8">{configQuery.data?.poolAddress}</p>
          )}
          <div />
        </div>
      </div>
      <div>
        <Button
          isDisabled={registeredRelaysQuery.isLoading}
          onPress={() => handleChangeDialogState('confirm')}>
          Change Fee Recipient Address
        </Button>
        <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
          Cancel
        </Button>
      </div>
    </>
  )
}
