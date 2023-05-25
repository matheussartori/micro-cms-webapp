import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem, type TextProps } from './'

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  args: {
    size: 'md',
    children: 'Lorem ipsum'
  },
  argTypes: {
    as: {
      control: {
        type: null
      }
    },
    css: {
      control: {
        type: null
      }
    },
    active: {
      control: {
        type: 'boolean'
      }
    },
    size: {
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl'
      ],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}
