import { DialogProps } from '../types'
import { useEffect } from 'react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import {
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useNetwork,
} from 'wagmi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { utils } from 'ethers'
import { fetchConfig } from '@/client/api/queryFunctions'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import contractInterface from '@/contract/abi.json'
import { weiToEth } from '@/utils/web3'
import { SMOOTHING_POOL_ADDRESS } from '@/utils/config'

interface DepositDialogProps extends DialogProps {
  validatorId: number
}

export function DepositDialog({
  steps,
  validatorId,
  handleClose,
  handleChangeDialogState,
}: DepositDialogProps) {
  const { address } = useAccount()
  const { chain } = useNetwork()

  const configQuery = useQuery({
    queryKey: ['config'],
    queryFn: fetchConfig,
  })

  // eslint-disable-next-line
  // @ts-ignore
  const abi = [...contractInterface] as const

  // eslint-disable-next-line
  const contractWrite = useContractWrite({
    address: SMOOTHING_POOL_ADDRESS,
    abi,
    mode: 'recklesslyUnprepared',
    functionName: 'subscribeValidator',
    args: [validatorId],
    overrides: {
      from: address,
      value: utils.parseUnits(configQuery.data?.collateralInWei || '0', 'wei'),
    },
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
        <h3 className="mb-6 text-left text-2xl font-bold">Deposit</h3>
        <StepProgressBar currentStep={2} steps={steps} />
      </div>
      {!waitForTransaction.isError ? (
        <div className="text-center">
          <h4 className="mb-4 text-lg font-normal">You are Depositing</h4>
          {configQuery.isLoading ? (
            <div className="mx-auto h-8 w-20 animate-pulse rounded bg-SkeletonGray" />
          ) : (
            <p className="text-2xl font-bold">
              {weiToEth(configQuery.data?.collateralInWei)} ETH
            </p>
          )}
          <p className="mt-4 text-lg font-normal tracking-wide">
            to The MEV Smoothing Pool
          </p>
          {waitForTransaction.isLoading && (
            <div className="mt-6 w-full rounded-lg bg-violet-50 px-4 py-7 text-sm font-normal text-DAppDeep">
              <div className="mx-auto mb-2 flex w-fit flex-col items-center sm:flex-row">
                <AiOutlineInfoCircle />
                <p className="ml-2 mt-1 sm:mt-0">
                  Your deposit is being processed.
                </p>
              </div>
              <Link
                className="text-violet-500 underline"
                href={`${chain?.blockExplorers?.default.url}/tx/${contractWrite.data?.hash}`}
                target="_blank">
                Check the transaction on block explorer
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-base text-red-500 sm:px-8">
          <AiOutlineInfoCircle className="mx-auto h-8 w-8" />
          <h4 className="mt-1 font-bold sm:mt-4">Deposit error!</h4>
          <p className="mt-1 font-normal sm:mt-4">
            Your Deposit has failed. Please go back and try again.
          </p>
          <h4 className="my-2 font-bold">Error:</h4>
          <div className="mb-4 h-32  overflow-scroll rounded-lg border border-red-400 p-2">
            {waitForTransaction.error?.message}
          </div>
        </div>
      )}
      <div>
        <Button
          isDisabled={contractWrite.isLoading || waitForTransaction.isLoading}
          onPress={() => contractWrite.write?.()}>
          {waitForTransaction.isError ? 'Try again' : 'Deposit'}
        </Button>
        <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
          Cancel
        </Button>
      </div>
    </>
  )
}
