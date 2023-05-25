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
        </BrowserRouter>
      )
    }
  ],
  args: {
    children: 'Lorem ipsum'
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
    },
    active: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta<MenuItemProps>

export const Default: StoryObj<MenuItemProps> = {}
