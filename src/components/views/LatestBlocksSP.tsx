import { LatestBlocksTable } from '../tables/LatestBlocksTable'
import { useQuery } from '@tanstack/react-query'
import { useNetwork } from 'wagmi'
import type { Block } from '@/components/tables/types'
import { fetchProposedBlocks } from '@/client/api/queryFunctions'
import { weiToEth } from '@/utils/web3'

export function LatestBlocksSP() {
  const { chain } = useNetwork()
  const { data, isLoading } = useQuery({
    queryKey: ['latest-blocks'],
    queryFn: fetchProposedBlocks,
  })

  let proposedBlocks: Block[] = []

  if (data) {
    proposedBlocks = data.map(
      ({ slot, withdrawalAddress, rewardType, rewardWei }) => ({
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
        chainId={chain?.id || 1}
        data={proposedBlocks}
        isLoading={isLoading}
      />
    </div>
  )
}
