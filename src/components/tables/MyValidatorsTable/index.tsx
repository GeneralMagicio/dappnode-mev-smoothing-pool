import { WarningIcon } from './components/WarningIcon'
import { Skeleton } from './components/Skeleton'
import { NotConnectedWarning } from './components/NotConnectedWarning'
import { headerTooltip, PAGE_SIZE } from './config'
import { TableLayout } from '../components/Table'
import { HeaderTooltip } from '../components/HeaderTooltip'
import { useMemo } from 'react'
import Link from 'next/link'
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { SubscribeToMevDialog } from '@/components/dialogs/SubscribeToMevDialog'
import { UnsubscribeToMevDialog } from '@/components/dialogs/UnsubscribeToMevDialog'
import { useSearchInput } from '@/hooks/useSearchInput'
import { addEthSuffix, shortenEthAddress } from '@/utils/web3'
import { toFixedNoTrailingZeros } from '@/utils/decimals'
import { getBeaconChainExplorer } from '@/utils/config'
import type { Validator } from '../types'

const columnHelper = createColumnHelper<Validator>()

const columns = [
  columnHelper.accessor('address', {
    header: () => (
      <HeaderTooltip header="Address" tooltip={headerTooltip.address} />
    ),
    cell: (info) => {
      const address = info.getValue()
      const shortAddress = shortenEthAddress(address, 22, 0)

      return (
        <Link
          className="font-medium underline"
          href={getBeaconChainExplorer('validator', address)}
          rel="noopener noreferrer"
          target="_blank">
          {shortAddress}
        </Link>
      )
    },
  }),
  columnHelper.accessor('pending', {
    header: () => (
      <HeaderTooltip header="Pending" tooltip={headerTooltip.pending} />
    ),
    cell: (info) => addEthSuffix(toFixedNoTrailingZeros(info.getValue(), 4)),
  }),
  columnHelper.accessor('claimable', {
    header: () => (
      <HeaderTooltip header="Claimable" tooltip={headerTooltip.claimable} />
    ),
    cell: (info) => addEthSuffix(toFixedNoTrailingZeros(info.getValue(), 4)),
  }),
  columnHelper.accessor('warning', {
    header: () => (
      <HeaderTooltip header="Warning" tooltip={headerTooltip?.warning} />
    ),
    cell: (info) => <WarningIcon warning={info.getValue()} />,
  }),
  columnHelper.accessor('subscribed', {
    header: '',
    cell: (info) => {
      const isSubscribed = info.getValue()
      const { validatorKey, validatorId } = info.row.original
      return isSubscribed ? (
        <UnsubscribeToMevDialog validatorId={validatorId} />
      ) : (
        <SubscribeToMevDialog
          validatorId={validatorId}
          validatorKey={validatorKey}
        />
      )
    },
  }),
]

interface MyValidatorsTableProps {
  data?: Validator[]
  isConnected?: boolean
  isLoading?: boolean
}

export function MyValidatorsTable({
  data,
  isConnected,
  isLoading,
}: MyValidatorsTableProps) {
  const { searchInput, setSearchInput, debouncedSearchInput } = useSearchInput()

  const filteredData = useMemo(
    () =>
      data?.filter((row) => {
        const address = row.address.toLowerCase()
        const search = debouncedSearchInput.toLowerCase()
        return address.includes(search)
      }),
    [debouncedSearchInput, data]
  )

  const table = useReactTable({
    columns,
    data: filteredData ?? [],
    initialState: {
      pagination: {
        pageSize: PAGE_SIZE,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  if (!isConnected) {
    return <NotConnectedWarning title="My Validators" />
  }

  if (isLoading) {
    return <Skeleton title="My Validators" />
  }

  return (
    <TableLayout
      className="h-[440px]"
      data={data ?? []}
      searchInput={searchInput}
      searchPlaceholder="Search Validator"
      setSearchInput={setSearchInput}
      table={table}
      title="My Validators"
    />
  )
}
