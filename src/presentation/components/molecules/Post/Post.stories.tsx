import type { Meta, StoryObj } from '@storybook/react'
import { Post, type PostProps } from './'

export default {
  title: 'Molecules/Post',
  component: Post,
  args: {
    post: {
      content: '<p>Content</p>',
      id: 'any',
      time: 'anyt',
      title: 'amy'
    }
  }
} as Meta<PostProps>

export const Default: StoryObj<PostProps> = {}
