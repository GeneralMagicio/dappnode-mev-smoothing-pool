import { MyRewards } from '../cards/MyRewards'
import { MyValidatorsTable } from '../tables/MyValidatorsTable'
import { useAccount } from 'wagmi'

export function UserInfo() {
  const { isConnected } = useAccount()

  return (
    <div className="mt-8 grid grid-cols-4 gap-x-6">
      <div className="col-span-3">
        <MyValidatorsTable isConnected={isConnected} />
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
