import { Button } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'cards/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    text: 'Button',
  },
}

export const Disabled: Story = {
  args: {
    text: 'Button',
    isDisabled: true,
  },
}
