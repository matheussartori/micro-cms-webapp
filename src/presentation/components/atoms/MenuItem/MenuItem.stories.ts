import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem, type MenuItemProps } from './'

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  args: {
    children: 'Lorem ipsum'
  },
  argTypes: {
    css: {
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
