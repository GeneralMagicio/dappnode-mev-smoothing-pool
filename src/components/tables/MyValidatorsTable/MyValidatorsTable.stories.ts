import { MyValidatorsTable } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MyValidatorsTable> = {
  title: 'tables/MyValidatorsTable',
  component: MyValidatorsTable,
}

export default meta
type Story = StoryObj<typeof MyValidatorsTable>

export const Primary: Story = {}
