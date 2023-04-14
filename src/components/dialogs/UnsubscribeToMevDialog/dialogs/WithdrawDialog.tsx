import { DialogProps } from '../types'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { fetchOnChainProof } from '@/client/api/queryFunctions'
import { weiToEth } from '@/utils/web3'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import contractInterface from '@/contract/abi.json'
import { toFixedNoTrailingZeros } from '@/utils/decimals'

interface WithdrawDialogProps extends DialogProps {
  validatorId: number
}

export function WithdrawDialog({
  steps,
  validatorId,
  handleChangeDialogState,
  handleClose,
}: WithdrawDialogProps) {
  const { address } = useAccount()
  const onChainProofQuery = useQuery({
    queryKey: ['onchain-proof', address],
    queryFn: () => fetchOnChainProof(address as `0x${string}`),
    enabled: !!address,
  })

  // eslint-disable-next-line
  // @ts-ignore
  const abi = [...contractInterface] as const

  const contractWrite = useContractWrite({
    address: '0x553BD5a94bcC09FFab6550274d5db140a95AE9bC',
    abi,
    mode: 'recklesslyUnprepared',
    functionName: 'unsuscribeValidator',
    args: [validatorId],
  })

  const waitForTransaction = useWaitForTransaction({
    hash: contractWrite.data?.hash,
  })

  useEffect(() => {
    if (!waitForTransaction.isSuccess) return
    handleChangeDialogState('success')
  }, [waitForTransaction.isSuccess, handleChangeDialogState])

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Withdraw</h3>
        <StepProgressBar currentStep={2} steps={steps} />
      </div>
      {!waitForTransaction.isError ? (
        <div className="text-center">
          <h4 className="text-lg font-normal">You are withdrawing</h4>
          <p className="mt-4 text-2xl font-bold">
            {toFixedNoTrailingZeros(
              weiToEth(onChainProofQuery.data?.claimableRewardsWei || 0),
              2
            )}{' '}
            ETH
          </p>
          <p className="mt-4 text-lg font-normal tracking-wide">
            to your recipient wallet address
          </p>
          {true && (
            <div className="mt-6 w-full rounded-lg bg-violet-50 px-4 py-8 text-sm font-normal text-DAppDeep">
              <div className="mx-auto mb-2 flex w-fit flex-col items-center sm:flex-row">
                <AiOutlineInfoCircle />
                <p className="ml-2 mt-1 sm:mt-0">
                  Your withdrawal is being processed.
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-2 text-center text-base text-red-500 md:px-8">
          <AiOutlineInfoCircle className="mx-auto h-8 w-8" />
          <h4 className="mt-1 font-bold">Withdrawal error!</h4>
          <p className="mt-1 font-normal">
            Your Withdrawal has failed. Please go back and try again.
          </p>
          <h4 className="my-1 font-bold">Error:</h4>
          <div className="mb-4 h-32 overflow-scroll rounded-lg border border-red-400 p-2">
            {waitForTransaction.error?.message}
          </div>
        </div>
      )}
      <div>
        <Button
          isDisabled={contractWrite.isLoading || waitForTransaction.isLoading}
          onPress={() => contractWrite.write?.()}>
          {waitForTransaction.isError ? 'Try again' : 'Withdraw'}
        </Button>
        <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
          Cancel
        </Button>
      </div>
    </>
  )
}
