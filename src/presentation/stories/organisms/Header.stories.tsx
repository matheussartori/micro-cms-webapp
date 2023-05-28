import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '../../components/organisms/Header'
import { PostProvider } from '@/presentation/context/PostContext'

export default {
  title: 'Organisms/Header',
  component: Header,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <PostProvider>
            {Story()}
          </PostProvider>
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
