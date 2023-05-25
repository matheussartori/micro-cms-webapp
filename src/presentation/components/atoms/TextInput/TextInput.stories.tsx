import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './'

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type something here...'
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
} as Meta

export const Default: StoryObj = {}
