import { DialogProps } from '../types'
import { useQuery } from '@tanstack/react-query'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import {
  fetchConfig,
  fetchValidatorRegisteredRelays,
} from '@/client/api/queryFunctions'
import { shortenEthAddress } from '@/utils/web3'

interface InitialDialogProps extends DialogProps {
  validatorKey: `0x${string}`
}

export function InitialDialog({
  steps,
  handleChangeDialogState,
  handleClose,
  validatorKey,
}: InitialDialogProps) {
  const configQuery = useQuery({
    queryKey: ['config'],
    queryFn: fetchConfig,
  })

  const registeredRelaysQuery = useQuery({
    queryKey: ['registered-relays'],
    queryFn: () => fetchValidatorRegisteredRelays(validatorKey),
  })

  const isCorrectFeeRecipient = registeredRelaysQuery.data?.correctFeeRecipients

  const handleNext = () => {
    if (!isCorrectFeeRecipient) {
      handleClose()
    } else {
      handleChangeDialogState('confirm')
    }
  }

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Warning</h3>
        <StepProgressBar currentStep={0} steps={steps} />
      </div>
      <div className="sm:px-6">
        <div>
          <h4 className="mb-2 text-DAppNeutral/500">Your Validator</h4>
          <p className="h-8 overflow-scroll">
            {shortenEthAddress(validatorKey, 20, 20)}
          </p>
        </div>
        {registeredRelaysQuery.isLoading ||
        registeredRelaysQuery.data?.correctFeeRecipients ? (
          <>
            <div className="mt-8">
              <h4 className="mb-2 text-DAppNeutral/500">
                Current Fee Recipient address
              </h4>
              {registeredRelaysQuery.isLoading ? (
                <div className="h-8 w-96 animate-pulse rounded bg-SkeletonGray" />
              ) : (
                <p className="h-8 overflow-scroll">
                  {
                    registeredRelaysQuery.data?.correctFeeRelayers?.[0]
                      .feeRecipient
                  }
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
                <p className="h-8 overflow-scroll">
                  {configQuery.data?.poolAddress}
                </p>
              )}
              <div />
            </div>
          </>
        ) : (
          <div className="mt-6 overflow-auto text-center text-base text-red-500">
            <AiOutlineInfoCircle className="mx-auto h-8 w-8" />
            <h4 className="mt-3 font-bold">Fee recipient error!</h4>
            <p className="mt-2 font-normal">
              The fee recipient address is not set as{' '}
              <span className="overflow-scroll font-semibold">
                {configQuery.data?.poolAddress}
              </span>{' '}
              Please change the fee recipient and try again.
            </p>
          </div>
        )}
      </div>
      <div>
        <Button
          isDisabled={registeredRelaysQuery.isLoading}
          onPress={handleNext}>
          {registeredRelaysQuery.isLoading || isCorrectFeeRecipient
            ? 'Next'
            : 'Change Fee Recipient Address'}
        </Button>
        <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
          Cancel
        </Button>
      </div>
    </>
  )
}
