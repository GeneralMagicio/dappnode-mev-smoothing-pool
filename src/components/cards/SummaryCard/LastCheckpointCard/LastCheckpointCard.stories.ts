import { LastCheckpointCard } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LastCheckpointCard> = {
  title: 'cards/LastCheckpointCard',
  component: LastCheckpointCard,
}

export default meta
type Story = StoryObj<typeof LastCheckpointCard>

export const Primary: Story = {
  args: {
    lastCheckpointDate: new Date('2023-03-20T00:00:00.000Z'),
    nextCheckpointDate: new Date('2023-04-30T00:00:00.000Z'),
  },
}

export const Loading: Story = {
  args: {
    lastCheckpointDate: new Date('2023-03-20T00:00:00.000Z'),
    nextCheckpointDate: new Date('2023-04-30T00:00:00.000Z'),
    isError: false,
    isLoading: true,
  },
}

export const Error: Story = {
  args: {
    lastCheckpointDate: new Date('2023-03-20T00:00:00.000Z'),
    nextCheckpointDate: new Date('2023-04-30T00:00:00.000Z'),
    isError: true,
    isLoading: false,
  },
}
