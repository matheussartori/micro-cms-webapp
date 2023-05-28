import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '../../components/atoms/TextInput'

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
    },
    containerCss: {
      control: {
        type: null
      }
    }
  }
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
