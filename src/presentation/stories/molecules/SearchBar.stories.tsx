import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { SearchBar } from '../../components/molecules/SearchBar'
import { PostProvider } from '@/presentation/context/PostContext'

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
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
