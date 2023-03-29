import { RewardsCard } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RewardsCard> = {
  title: 'cards/RewardsCard',
  component: RewardsCard,
}

export default meta
type Story = StoryObj<typeof RewardsCard>

export const AverageRewards: Story = {
  args: {
    title: 'Average Rewards',
    tooltip: 'Average rewards over the last 30 days',
    ethReward: 0.11,
    secondaryRewardTitle: 'SP Average',
    secondaryReward: 0.004,
    isError: false,
    isLoading: false,
  },
}

export const AverageRewardsLoading: Story = {
  args: {
    title: 'Average Rewards',
    tooltip: 'Average rewards over the last 30 days',
    ethReward: 0.11,
    secondaryRewardTitle: 'SP Average',
    secondaryReward: 0.004,
    isError: false,
    isLoading: true,
  },
}

export const AverageRewardsError: Story = {
  args: {
    title: 'Average Rewards',
    tooltip: 'Average rewards over the last 30 days',
    ethReward: 0.11,
    secondaryRewardTitle: 'SP Average',
    secondaryReward: 0.004,
    isError: true,
    isLoading: false,
  },
}

export const TotalRewardsPrimary: Story = {
  args: {
    title: 'Total Rewards',
    tooltip: 'Total rewards over the last 30 days',
    ethReward: 954.94,
    secondaryRewardTitle: 'Last 7 days',
    secondaryReward: 12.04,
    isError: false,
    isLoading: false,
  },
}

export const TotalRewardsLoading: Story = {
  args: {
    title: 'Total Rewards',
    tooltip: 'Total rewards over the last 30 days',
    ethReward: 954.94,
    secondaryRewardTitle: 'Last 7 days',
    secondaryReward: 12.04,
    isError: false,
    isLoading: true,
  },
}

export const TotalRewardsError: Story = {
  args: {
    title: 'Total Rewards',
    tooltip: 'Total rewards over the last 30 days',
    ethReward: 954.94,
    secondaryRewardTitle: 'Last 7 days',
    secondaryReward: 12.04,
    isError: true,
    isLoading: false,
  },
}
