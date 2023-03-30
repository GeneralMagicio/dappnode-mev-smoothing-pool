import { Button } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    text: 'Button',
  },
}

export const PrimaryDisabled: Story = {
  args: {
    buttonType: 'primary',
    text: 'Button',
    isDisabled: true,
  },
}

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    text: 'Button',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    buttonType: 'secondary',
    text: 'Button',
    isDisabled: true,
  },
}

export const Warning: Story = {
  args: {
    buttonType: 'warning',
    text: 'Button',
  },
}

export const WarningDisabled: Story = {
  args: {
    buttonType: 'warning',
    text: 'Button',
    isDisabled: true,
  },
}
