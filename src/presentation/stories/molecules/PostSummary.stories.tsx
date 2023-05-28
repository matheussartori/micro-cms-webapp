import type { Meta, StoryObj } from '@storybook/react'
import { PostSummary, type PostSummaryProps } from '../../components/molecules/PostSummary'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Molecules/PostSummary',
  component: PostSummary,
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
    time: Date.now(),
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
} as Meta<PostSummaryProps>

export const Default: StoryObj<PostSummaryProps> = {}
