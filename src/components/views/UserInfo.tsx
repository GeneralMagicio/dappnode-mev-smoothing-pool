import { MyRewards } from '../cards/MyRewards'
import { MyValidatorsTable } from '../tables/MyValidatorsTable'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { weiToEth } from '@/utils/web3'
import type { Validator } from '@/components/tables/types'
import { fetchValidatorsByDepositor } from '@/client/api/queryFunctions'

export function UserInfo() {
  const { isConnected, address } = useAccount()

  const { data, isLoading } = useQuery({
    queryKey: ['proposed-blocks'],
    queryFn: () => fetchValidatorsByDepositor(address),
    enabled: !!address,
  })

  let tableData: Validator[] = []

  if (data) {
    tableData = data.map(
      ({ status, validatorKey, pendingRewardsWei, accumulatedRewardsWei }) => ({
        address: validatorKey as `0x${string}`,
        pending: weiToEth(pendingRewardsWei),
        claimable: weiToEth(accumulatedRewardsWei),
        subscribed: status === 'active',
        warning: 'none',
      })
    )
  }

  return (
    <div className="mt-8 grid grid-cols-4 gap-x-6">
      <div className="col-span-3">
        <MyValidatorsTable
          data={tableData}
          isConnected={isConnected}
          isLoading={isLoading}
        />
      </div>
      <div className="col-span-1">
        <MyRewards
          claimableRewards={0}
          isDisabled={false}
          isLoading={!isConnected}
          pendingRewards={0}
          totalAccumulatedRewards={0}
        />
      </div>
    </div>
  )
}
