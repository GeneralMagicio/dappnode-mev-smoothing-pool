import { LatestBlocksTable } from '../tables/LatestBlocksTable'
import { useQuery } from '@tanstack/react-query'
import type { Block } from '@/components/tables/types'

import { fetchProposedBlocks } from '@/client/api/queryFunctions'
import { weiToEth } from '@/utils/web3'

export function LatestBlocksSP() {
  const { data, isLoading } = useQuery({
    queryKey: ['latest-blocks'],
    queryFn: fetchProposedBlocks,
  })

  let proposedBlocks: Block[] = []

  if (data) {
    proposedBlocks = data.map(
      ({ slot, depositAddress, rewardType, rewardWei }) => ({
        slot,
        proposer: depositAddress as `0x${string}`,
        rewardType,
        reward: weiToEth(rewardWei),
      })
    )
  }

  return (
    <div className="mt-8">
      <LatestBlocksTable data={proposedBlocks} isLoading={isLoading} />
    </div>
  )
}
