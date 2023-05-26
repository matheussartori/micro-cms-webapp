import type { Meta, StoryObj } from '@storybook/react'
import { Post, type PostProps } from './'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Organisms/Post',
  component: Post,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          {Story()}
        </BrowserRouter>
      )
    }
  ],
  args: {
    content: '<p>Content goes here</p>',
    id: 'any',
    time: 'May 25, 2023',
    title: 'Lorem Ipsum'
  }
} as Meta<PostProps>

export const Default: StoryObj<PostProps> = {}
