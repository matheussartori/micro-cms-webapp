import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from './'

export default {
  title: 'Atoms/Button',
  component: Button,
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
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
