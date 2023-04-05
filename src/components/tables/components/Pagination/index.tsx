import { v4 as uuidv4 } from 'uuid'
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
  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === totalPages - 1

  const { paginationRange, handleSetPage } = usePagination({
    currentPage,
    totalPageCount: totalPages,
    setCurrentPage,
  })

  return (
    <div className="flex w-full items-center justify-between bg-white px-8 py-3">
      <p className="text-sm font-normal text-DAppNeutral/500 ">
        Showing {Math.min(itemsPerPage, totalItems)} of {totalItems} Results
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
            key={uuidv4()}
            type="button"
            className={clsx(
              'rounded py-2 px-3',
              currentPage === Number(page) - 1 &&
                'bg-DAppLight text-DAppBlue hover:bg-DAppLight',
              typeof page === 'number'
                ? 'cursor-pointer hover:bg-DAppLight/80'
                : 'cursor-default'
            )}
            onClick={() => handleSetPage(Number(page) - 1)}>
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
