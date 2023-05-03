import { LatestBlocksTable } from '../tables/LatestBlocksTable'
import { useQuery } from '@tanstack/react-query'
import { useNetwork } from 'wagmi'
import type { Block } from '@/components/tables/types'
import { fetchAllBlocks } from '@/client/api/queryFunctions'
import { weiToEth } from '@/utils/web3'

export function LatestBlocksSP() {
  const { chain } = useNetwork()
  const { data, isLoading } = useQuery({
    queryKey: ['latest-blocks'],
    queryFn: fetchAllBlocks,
  })

  let blocks: Block[] = []

  if (data) {
    blocks = data.map(
      ({ slot, withdrawalAddress, rewardType, rewardWei, blockType }) => ({
        blockType,
        slot,
        proposer: withdrawalAddress as `0x${string}`,
        rewardType,
        reward: weiToEth(rewardWei),
      })
    )
  }

  return (
    <div className="mt-8">
      <LatestBlocksTable
        blockExplorerUrl={chain?.blockExplorers?.default.url}
        data={blocks}
        isLoading={isLoading}
      />
    </div>
  )
}
