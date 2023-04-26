import { Pagination } from './Pagination'
import { TableDataTypes } from '../types'
import { flexRender, type Table as TableType } from '@tanstack/react-table'
import clsx from 'clsx'
import { SearchInput } from '@/components/common/SearchInput'

interface TableProps<T> {
  className?: string
  data: T[]
  searchInput: string
  setSearchInput: (value: string) => void
  searchPlaceholder?: string
  table: TableType<T>
  title: string
}

export function TableLayout<T extends TableDataTypes>({
  className,
  data,
  searchInput,
  setSearchInput,
  searchPlaceholder,
  table,
  title,
}: TableProps<T>) {
  // const [searchInput, setSearchInput] = useState<string>('')

  return (
    <div className="w-full overflow-hidden rounded-lg bg-white">
      <div className="flex items-center justify-between py-6 px-8">
        <h3 className="text-2xl font-bold leading-8 text-DAppDeep">{title}</h3>
        <div className="max-w-xs">
          <SearchInput
            placeholder={searchPlaceholder}
            value={searchInput}
            onChange={setSearchInput}
          />
        </div>
      </div>
      <div className={clsx('overflow-y-hidden overflow-x-scroll', className)}>
        <table className="w-full table-auto">
          <thead className="w-full border-t-[0.5px] border-DAppNeutral/100 bg-DAppNeutral/50 px-[20px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-4 text-left text-sm font-medium">
                    {header.isPlaceholder ? null : (
                      <p className="w-fit px-6 text-left">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </p>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="border-t-[0.5px] border-DAppNeutral/100">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b-[0.5px]">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-3 px-7 text-sm font-normal text-DAppDeep">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={table.getState().pagination.pageIndex}
        itemsPerPage={table.getState().pagination.pageSize}
        setCurrentPage={table.setPageIndex}
        totalItems={data.length}
        totalPages={table.getPageCount()}
      />
    </div>
  )
}
