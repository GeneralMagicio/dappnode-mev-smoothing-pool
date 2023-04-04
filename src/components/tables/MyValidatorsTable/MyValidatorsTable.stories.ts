import { MyValidatorsTable } from '.'
import type { Validator } from '../types'
import type { Meta, StoryObj } from '@storybook/react'

export const data = [
  {
    address: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5',
    pending: 1.21,
    claimable: 0.12,
    warning: 'none',
    subscribed: true,
  },
  {
    address: '0x388C818CA8B9251b393131C08a736A67ccB19297',
    pending: 1.21,
    claimable: 0.12,
    warning: 'yellow',
    subscribed: true,
  },
  {
    address: '0x97C28c835CE99b23F63414f8989ec410Ab41f52D',
    pending: 3.32,
    claimable: 3.42,
    warning: 'red',
    subscribed: false,
  },
  {
    address: '0xE7d3982E214F9DFD53d23a7f72851a7044072250',
    pending: 1.21,
    claimable: 0.12,
    warning: 'yellow',
    subscribed: true,
  },
  {
    address: '0xD2f43b11122C56D12d4cCef4Be503C4d47D33636',
    pending: 1.21,
    claimable: 0.12,
    warning: 'none',
    subscribed: false,
  },
  {
    address: '0x492d818f545454D50F6e90bCC8b22692BDc22030',
    pending: 3.32,
    claimable: 3.42,
    warning: 'red',
    subscribed: false,
  },
  {
    address: '0x30614bc1e56bf9f30f2dda7898b520a20b560ef3',
    pending: 3.32,
    claimable: 3.42,
    warning: 'yellow',
    subscribed: false,
  },
] as Validator[]

const meta: Meta<typeof MyValidatorsTable> = {
  title: 'table/MyValidatorsTable',
  component: MyValidatorsTable,
}

export default meta
type Story = StoryObj<typeof MyValidatorsTable>

export const Primary: Story = {
  args: {
    data,
  },
}
