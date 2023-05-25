import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum'
  },
  argTypes: {
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
