import { LatestBlocksTable } from '.'
import type { Block } from '../types'
import type { Meta, StoryObj } from '@storybook/react'

const data: Block[] = [
  {
    slot: 1,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'mev',
    reward: 0.32,
  },
  {
    slot: 2,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'vanila',
    reward: 2.12,
  },
  {
    slot: 3,
    proposer: '0x7915e43086Cd78Be341Df73726C0947B6334b978',
    rewardType: 'mev',
    reward: 0.32,
  },
  {
    slot: 4,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'mev',
    reward: 0.32,
  },
  {
    slot: 5,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'vanila',
    reward: 2.12,
  },
  {
    slot: 6,
    proposer: '0x7915e43086Cd78Be341Df73726C0947B6334b978',
    rewardType: 'mev',
    reward: 0.32,
  },
  {
    slot: 7,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'mev',
    reward: 0.32,
  },
  {
    slot: 8,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'vanila',
    reward: 2.12,
  },
  {
    slot: 9,
    proposer: '0x7915e43086Cd78Be341Df73726C0947B6334b978',
    rewardType: 'mev',
    reward: 0.32,
  },
  {
    slot: 10,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'mev',
    reward: 0.32,
  },
  {
    slot: 11,
    proposer: '0x00005ea00ac477b1030ce78506496e8c2de24bf5',
    rewardType: 'vanila',
    reward: 2.12,
  },
  {
    slot: 12,
    proposer: '0x7915e43086Cd78Be341Df73726C0947B6334b978',
    rewardType: 'mev',
    reward: 0.32,
  },
]

const meta: Meta<typeof LatestBlocksTable> = {
  title: 'table/LatestBlocksTable',
  component: LatestBlocksTable,
}

export default meta
type Story = StoryObj<typeof LatestBlocksTable>

export const Primary: Story = {
  args: {
    state: 'success',
    data,
  },
}
