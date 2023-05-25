import type { Meta, StoryObj } from '@storybook/react'
import { PostItem } from './'
import { PostItemProps } from './PostItem'

export default {
  title: 'Molecules/PostItem',
  component: PostItem,
  args: {
    time: '25 May, 2023',
    title: 'Title',
    shortContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo expedita esse veniam illo placeat dicta, voluptatibus exercitationem possimus iste pariatur culpa iure, distinctio officia harum sapiente dolorem? Ab, sunt.'
  }
} as Meta<PostItemProps>

export const Default: StoryObj<PostItemProps> = {}
