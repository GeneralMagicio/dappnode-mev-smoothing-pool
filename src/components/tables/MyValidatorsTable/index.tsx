import { Warning } from './components/Warning'
import { headerTooltip, PAGE_SIZE } from './config'
import { TableLayout } from '../components/Table'
import { HeaderTooltip } from '../components/HeaderTooltip'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Button } from '@/components/common/Button'
import { addEthSuffix, shortenEthAddress } from '@/utils/web3'
import type { Validator } from '../types'

const columnHelper = createColumnHelper<Validator>()

const columns = [
  columnHelper.accessor('address', {
    header: () => (
      <HeaderTooltip header="Address" tooltip={headerTooltip.address} />
    ),
    cell: (info) => shortenEthAddress(info.getValue(), 22, 0),
  }),
  columnHelper.accessor('pending', {
    header: () => (
      <HeaderTooltip header="Pending" tooltip={headerTooltip.pending} />
    ),
    cell: (info) => addEthSuffix(info.getValue()),
  }),
  columnHelper.accessor('claimable', {
    header: () => (
      <HeaderTooltip header="Claimable" tooltip={headerTooltip.claimable} />
    ),
    cell: (info) => addEthSuffix(info.getValue()),
  }),
  columnHelper.accessor('warning', {
    header: () => (
      <HeaderTooltip header="Warning" tooltip={headerTooltip?.warning} />
    ),
    cell: (info) => <Warning warning={info.getValue()} />,
  }),
  columnHelper.accessor('subscribed', {
    header: '',
    cell: (info) => {
      const isSubscribed = info.getValue()
      return (
        <Button
          buttonType={isSubscribed ? 'tertiary' : 'secondary'}
          className="max-w-fit"
          color="blue"
          size="sm">
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </Button>
      )
    },
  }),
]

interface MyValidatorsTableProps {
  data: Validator[]
}

export function MyValidatorsTable({ data }: MyValidatorsTableProps) {
  const table = useReactTable({
    columns,
    data,
    initialState: {
      pagination: {
        pageSize: PAGE_SIZE,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return <TableLayout data={data} table={table} title="My Validators" />
}
