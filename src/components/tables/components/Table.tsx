import { Pagination } from './Pagination'
import { TableDataTypes } from '../types'
import { flexRender, type Table as TableType } from '@tanstack/react-table'

interface TableProps<T> {
  className?: string
  data: T[]
  table: TableType<T>
  title: string
}

export function TableLayout<T extends TableDataTypes>({
  className,
  data,
  table,
  title,
}: TableProps<T>) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white">
      <h3 className="p-6 text-2xl font-bold leading-8 text-DAppDeep">
        {title}
      </h3>
      <div className={className}>
        <table className=" w-full table-auto">
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
