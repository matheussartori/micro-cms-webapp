import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem, type MenuItemProps } from './'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          {Story()}
          <MenuItem to="/other">Ipsum</MenuItem>
        </BrowserRouter>
      )
    }
  ],
  args: {
    children: 'Lorem',
    to: '/'
  },
  argTypes: {
    css: {
      control: {
        type: null
      }
    },
    as: {
      control: {
        type: null
      }
    }
  }
} as Meta<MenuItemProps>

export const Default: StoryObj<MenuItemProps> = {}
