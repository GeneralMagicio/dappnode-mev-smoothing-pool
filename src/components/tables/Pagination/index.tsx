import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { usePagination } from '@/hooks/usePagination'

interface PaginationProps {
  currentPage: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  totalPages: number
  totalItems: number
  itemsPerPage: number
}

export function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}: PaginationProps) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const { paginationRange, handleSetPage } = usePagination({
    currentPage,
    totalPageCount: totalPages,
    setCurrentPage,
  })

  return (
    <div className="flex w-full items-center justify-between bg-white px-8 py-3">
      <p className="text-sm font-normal text-DAppNeutral/500 ">
        Showing {itemsPerPage} of {totalItems} Results
      </p>
      <div className="flex items-center gap-x-[2px] text-sm text-DAppDeep">
        <button
          className={isFirstPage ? 'text-DAppNeutral/500' : ''}
          disabled={isFirstPage}
          type="button"
          onClick={() => setCurrentPage(currentPage - 1)}>
          <IoIosArrowBack />
        </button>
        {paginationRange?.map((page) => (
          <button
            key={crypto.randomUUID()}
            type="button"
            className={clsx(
              'rounded py-2 px-3',
              page === currentPage && 'bg-DAppLight hover:bg-DAppLight',
              typeof page === 'number'
                ? 'cursor-pointer hover:bg-DAppLight/50'
                : 'cursor-default'
            )}
            onClick={() => handleSetPage(page)}>
            {page}
          </button>
        ))}
        <button
          className={isLastPage ? 'text-DAppNeutral/500' : ''}
          disabled={isLastPage}
          type="button"
          onClick={() => setCurrentPage(currentPage + 1)}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  )
}
