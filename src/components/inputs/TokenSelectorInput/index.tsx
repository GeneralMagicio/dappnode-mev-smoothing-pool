import { Selector } from './Selector'
import { useState } from 'react'

const tokens = ['ETH', 'DAI', 'USDC', 'USDT']

export function TokenSelectorInput() {
  const [selectedToken, setSelectedToken] = useState(tokens[0])
  return (
    <div className="flex w-full items-center rounded border bg-DAppLight">
      <Selector
        tokens={tokens}
        value={selectedToken}
        onValueChange={setSelectedToken}
      />
      <input
        className="min-h-full w-full border-l-2 bg-DAppLight pl-3 [appearance:textfield] focus:outline-none"
        placeholder="0.00"
        type="number"
      />
    </div>
  )
}
