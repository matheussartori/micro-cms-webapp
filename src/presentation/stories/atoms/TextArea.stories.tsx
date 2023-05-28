import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '../../components/atoms/TextArea'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
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
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}
