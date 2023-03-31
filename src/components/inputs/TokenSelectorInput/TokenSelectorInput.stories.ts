import { TokenSelectorInput } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TokenSelectorInput> = {
  title: 'inputs/TokenSelectorInput',
  component: TokenSelectorInput,
}

export default meta
type Story = StoryObj<typeof TokenSelectorInput>

export const Primary: Story = {}
