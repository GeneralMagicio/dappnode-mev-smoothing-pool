import { DialogProps } from '../types'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { usePrepareContractWrite, useContractWrite, useAccount } from 'wagmi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { utils } from 'ethers'
import { fetchConfig } from '@/client/api/queryFunctions'
import { StepProgressBar } from '@/components/common/StepProgressBar'
import { Button } from '@/components/common/Button'
import contractInterface from '@/contract/abi.json'
import { weiToEth } from '@/utils/web3'

interface DepositDialogProps extends DialogProps {
  validator: string
}

export function DepositDialog({
  steps,
  validator,
  handleClose,
  handleChangeDialogState,
}: DepositDialogProps) {
  const { address } = useAccount()
  const configQuery = useQuery({
    queryKey: ['config'],
    queryFn: fetchConfig,
  })

  // eslint-disable-next-line
  // @ts-ignore
  const abi = [...contractInterface] as const

  const config = usePrepareContractWrite({
    address: '0x553BD5a94bcC09FFab6550274d5db140a95AE9bC',
    abi,
    functionName: 'suscribeValidator',
    args: [Number(validator)],
    overrides: {
      from: address,
      value: utils.parseEther(
        String(weiToEth(configQuery.data?.collateralInWei))
      ),
    },
    enabled: !!configQuery.isSuccess && !!address,
  })

  // eslint-disable-next-line
  const contract = useContractWrite(config as any)

  useEffect(() => {
    if (!contract.isSuccess) return
    handleChangeDialogState('success')
  }, [contract.isSuccess, handleChangeDialogState])

  return (
    <>
      <div className="-mt-2 text-DAppDeep">
        <h3 className="mb-6 text-left text-2xl font-bold">Deposit</h3>
        <StepProgressBar currentStep={2} steps={steps} />
      </div>
      {!contract.isError ? (
        <div className="text-center">
          <h4 className="mb-4 text-lg font-normal">You are Depositing</h4>
          {configQuery.isLoading ? (
            <div className="h-8 w-20 animate-pulse rounded bg-SkeletonGray" />
          ) : (
            <p className="text-2xl font-bold">
              {weiToEth(configQuery.data?.collateralInWei)} ETH
            </p>
          )}
          <p className="mt-4 text-lg font-normal tracking-wide">
            to The MEV Smoothing Pool
          </p>
        </div>
      ) : (
        <div className="px-8 text-center text-base text-red-500">
          <AiOutlineInfoCircle className="mx-auto h-8 w-8" />
          <h4 className="mt-4 font-bold">Deposit error!</h4>
          <p className="mt-4 font-normal">
            Your Deposit has failed. Please go back and try again.
          </p>
        </div>
      )}
      <div>
        <Button onPress={() => contract.write?.()}>Deposit</Button>
        <Button buttonType="secondary" className="mt-4" onPress={handleClose}>
          Cancel
        </Button>
      </div>
    </>
  )
}
