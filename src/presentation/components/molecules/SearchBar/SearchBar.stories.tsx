import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './'

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
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
