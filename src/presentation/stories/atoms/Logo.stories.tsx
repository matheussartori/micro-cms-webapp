import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from '../../components/atoms/Logo'

export default {
  title: 'Atoms/Logo',
  component: Logo,
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
