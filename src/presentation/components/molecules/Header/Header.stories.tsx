import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Molecules/Header',
  component: Header,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          {Story()}
        </BrowserRouter>
      )
    }
  ],
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
