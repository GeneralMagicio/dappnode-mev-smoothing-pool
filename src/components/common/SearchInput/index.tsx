import { ChangeEvent } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchInputProps {
  placeholder?: string
  value: string
  onChange?: (value: string) => void
}

export function SearchInput({
  placeholder,
  value,
  onChange,
}: SearchInputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value)
    }
  }

  return (
    <div className="relative flex w-full items-center">
      <AiOutlineSearch className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-DAppGray" />
      <input
        className="rounded-md border border-DAppNeutral/100 py-3 pr-4 pl-11 font-normal text-DAppDeep placeholder:font-light placeholder:text-DAppGray focus:outline-none "
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  )
}
