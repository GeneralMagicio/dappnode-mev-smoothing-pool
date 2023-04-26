import { PAGE_SIZE, headerTooltip } from './config'
import { Skeleton } from './components/Skeleton'
import { TableLayout } from '../components/Table'
import { HeaderTooltip } from '../components/HeaderTooltip'
import Link from 'next/link'
import { useMemo } from 'react'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useSearchInput } from '@/hooks/useSearchInput'
import { addEthSuffix } from '@/utils/web3'
import { toFixedNoTrailingZeros } from '@/utils/decimals'
import { getBeaconChainExplorer } from '@/utils/config'
import type { Block } from '../types'

const columnHelper = createColumnHelper<Block>()

const getColumns = (chainId: number, blackExplorerUrl?: string) => [
  columnHelper.accessor('slot', {
    header: () => <HeaderTooltip header="Slot" tooltip={headerTooltip.slot} />,
    cell: (info) => {
      const slot = info.getValue()
      return (
        <Link
          className="font-medium underline"
          href={getBeaconChainExplorer(chainId, 'slot', slot)}
          rel="noopener noreferrer"
          target="_blank">
          {slot.toLocaleString()}
        </Link>
      )
    },
  }),
  columnHelper.accessor('proposer', {
    header: () => (
      <HeaderTooltip header="Proposer" tooltip={headerTooltip.proposer} />
    ),
    cell: (info) => {
      const proposer = info.getValue()
      return (
        <Link
          className="font-medium underline"
          href={`${blackExplorerUrl}/address/${proposer}`}
          rel="noopener noreferrer"
          target="_blank">
          {proposer.toLocaleString()}
        </Link>
      )
    },
  }),
  columnHelper.accessor('rewardType', {
    header: () => (
      <HeaderTooltip header="Reward Type" tooltip={headerTooltip.rewardType} />
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('reward', {
    header: () => (
      <HeaderTooltip header="Reward" tooltip={headerTooltip.reward} />
    ),
    cell: (info) => addEthSuffix(toFixedNoTrailingZeros(info.getValue(), 4)),
  }),
]

interface LatestBlocksTableProps {
  blockExplorerUrl?: string
  chainId: number
  data?: Block[]
  isLoading: boolean
}

export function LatestBlocksTable({
  blockExplorerUrl,
  chainId,
  data,
  isLoading,
}: LatestBlocksTableProps) {
  const { searchInput, setSearchInput, debouncedSearchInput } = useSearchInput()

  const filteredData = useMemo(
    () =>
      data
        ?.filter((row) => {
          const address = row.proposer.toLowerCase()
          const search = debouncedSearchInput.toLowerCase()
          return address.includes(search)
        })
        .sort((a, b) => b.slot - a.slot),
    [debouncedSearchInput, data]
  )

  const table = useReactTable({
    columns: getColumns(chainId, blockExplorerUrl),
    data: filteredData ?? [],
    initialState: {
      pagination: {
        pageSize: PAGE_SIZE,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  if (isLoading) return <Skeleton title="Latest Blocks to SP" />

  return (
    <TableLayout
      className="h-[510px]"
      data={filteredData ?? []}
      searchInput={searchInput}
      searchPlaceholder="Search Proposer"
      setSearchInput={setSearchInput}
      table={table}
      title="Latest Blocks to SP"
    />
  )
}
