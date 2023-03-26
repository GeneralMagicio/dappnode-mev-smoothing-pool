import { TotalSubscribersCard } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TotalSubscribersCard> = {
  title: 'cards/TotalSubscribersCard',
  component: TotalSubscribersCard,
}

export default meta
type Story = StoryObj<typeof TotalSubscribersCard>

export const Primary: Story = {
  args: {
    subscribers: 3789,
  },
}
