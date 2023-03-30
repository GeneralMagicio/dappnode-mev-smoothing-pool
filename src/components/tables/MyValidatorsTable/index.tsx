import { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { shortenEthAddress } from '@/utils/web3'

interface Validator {
  address: `0x${string}`
  pending: number
  claimable: number
  warning: 'success' | 'attention' | 'error'
}

const columnHelper = createColumnHelper<Validator>()

const columns = [
  columnHelper.accessor('address', {
    cell: (info) => shortenEthAddress(info.getValue()),
  }),
  columnHelper.accessor('pending', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('claimable', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('warning', {
    cell: (info) => info.getValue(),
  }),
]

export function MyValidatorsTable() {
  const [data] = useState<Validator[]>(defaultData)

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="rounded border p-4">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Showing {table.getState().pagination.pageSize} of {defaultData.length}{' '}
        results
      </p>
    </div>
  )
}

const defaultData: Validator[] = [
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
  {
    address:
      '0x7daaecffdaa01f079dacb8e89e8186a6169840f49d4f4271c0d37ed1303d9f29',
    pending: 1.21,
    claimable: 0.12,
    warning: 'success',
  },
  {
    address:
      '0xeed1cebd10696de5c0ab8fdb13e490369a9ca86f6430d0f4d1daec0eb7031cc7',
    pending: 3.32,
    claimable: 3.42,
    warning: 'attention',
  },
  {
    address:
      '0xa7629d37e8f87a271653fa92365f97dd7d77a03aae2b940e1ff9d15fd2c0a6b9',
    pending: 10.2,
    claimable: 5.2,
    warning: 'error',
  },
]
