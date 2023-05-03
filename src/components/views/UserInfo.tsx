import { MyRewards } from '../cards/MyRewards'
import { MyValidatorsTable } from '../tables/MyValidatorsTable'
import { useQuery } from '@tanstack/react-query'
import { useAccount, useNetwork } from 'wagmi'
import { weiToEth } from '@/utils/web3'
import type { Validator } from '@/components/tables/types'
import {
  fetchOnChainProof,
  fetchValidatorsByDepositor,
} from '@/client/api/queryFunctions'

export function UserInfo() {
  const { isConnected, address } = useAccount()
  const { chain } = useNetwork()

  const validatorsQuery = useQuery({
    queryKey: ['user-validators', address],
    queryFn: () => fetchValidatorsByDepositor(address),
    enabled: !!address,
  })
  const onChainProofQuery = useQuery({
    queryKey: ['onchain-proof', address],
    queryFn: () => fetchOnChainProof(address),
    enabled: !!address,
  })

  const totalAccumulatedRewards = weiToEth(
    onChainProofQuery.data?.totalAccumulatedRewardsWei
  )
  const claimableRewards = weiToEth(onChainProofQuery.data?.claimableRewardsWei)
  const pendingRewards = weiToEth(onChainProofQuery.data?.pendingRewardsWei)

  let tableData: Validator[] = []

  if (validatorsQuery.data) {
    tableData = validatorsQuery.data.map(
      ({
        status,
        validatorKey,
        validatorIndex,
        pendingRewardsWei,
        accumulatedRewardsWei,
      }) => ({
        address: validatorKey as `0x${string}`,
        pending: weiToEth(pendingRewardsWei || 0),
        claimable: weiToEth(accumulatedRewardsWei || 0),
        subscribed: status === 'active',
        validatorId: validatorIndex,
        validatorKey: validatorKey as `0x${string}`,
        warning: 'none',
      })
    )
  }

  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
      <div className="order-1 col-span-4 sm:order-1 sm:col-span-2 lg:col-span-3">
        <MyValidatorsTable
          data={tableData}
          isConnected={isConnected}
          isLoading={validatorsQuery.isLoading}
        />
      </div>
      <div className="col-span-4 sm:order-2 sm:col-span-1">
        <MyRewards
          claimableRewards={claimableRewards}
          isLoading={!isConnected}
          pendingRewards={pendingRewards}
          totalAccumulatedRewards={totalAccumulatedRewards}
          isDisabled={
            onChainProofQuery.isLoading ||
            onChainProofQuery.isError ||
            !onChainProofQuery.data?.claimableRewardsWei ||
            chain?.unsupported
          }
        />
      </div>
    </div>
  )
}
