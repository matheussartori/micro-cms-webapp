import type { Meta, StoryObj } from '@storybook/react'
import { PostItem } from './'
import { PostItemProps } from './PostItem'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Molecules/PostItem',
  component: PostItem,
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
    id: 'any_id',
    time: '25 May, 2023',
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo expedita esse veniam illo placeat dicta, voluptatibus exercitationem possimus iste pariatur culpa iure, distinctio officia harum sapiente dolorem? Ab, sunt.'
  },
  argTypes: {
    id: {
      control: {
        type: null
      }
    }
  }
} as Meta<PostItemProps>

export const Default: StoryObj<PostItemProps> = {}
