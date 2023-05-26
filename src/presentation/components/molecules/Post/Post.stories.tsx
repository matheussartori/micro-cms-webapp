import type { Meta, StoryObj } from '@storybook/react'
import { Post, type PostProps } from './'

export default {
  title: 'Molecules/PostModel',
  component: Post,
  args: {
    content: '<p>Content goes here</p>',
    id: 'any',
    time: 'May 25, 2023',
    title: 'Lorem Ipsum'
  }
} as Meta<PostProps>

export const Default: StoryObj<PostProps> = {}
