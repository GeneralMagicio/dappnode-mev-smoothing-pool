import { PAGE_SIZE, headerTooltip } from './config'
import { Skeleton } from './components/Skeleton'
import { TableLayout } from '../components/Table'
import { HeaderTooltip } from '../components/HeaderTooltip'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { addEthSuffix } from '@/utils/web3'
import { toFixedNoTrailingZeros } from '@/utils/decimals'
import type { Block } from '../types'

const columnHelper = createColumnHelper<Block>()

const columns = [
  columnHelper.accessor('slot', {
    header: () => <HeaderTooltip header="Slot" tooltip={headerTooltip.slot} />,
    cell: (info) => info.getValue().toLocaleString(),
  }),
  columnHelper.accessor('proposer', {
    header: () => (
      <HeaderTooltip header="Proposer" tooltip={headerTooltip.proposer} />
    ),
    cell: (info) => info.getValue(),
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
  data?: Block[]
  isLoading: boolean
}

export function LatestBlocksTable({ data, isLoading }: LatestBlocksTableProps) {
  const table = useReactTable({
    columns,
    data: data ?? [],
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
      data={data ?? []}
      table={table}
      title="Latest Blocks to SP"
    />
  )
}
