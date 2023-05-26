import type { Meta, StoryObj } from '@storybook/react'
import { BlogTemplate, type BlogTemplateProps } from './'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../../organisms/Header'

export default {
  title: 'Templates/BlogTemplate',
  component: BlogTemplate,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Header />
          {Story()}
        </BrowserRouter>
      )
    }
  ],
  args: {
    posts: [
      {
        id: 'any_id',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fuga autem aperiam quis, consequatur commodi cupiditate beatae earum tenetur illo molestiae debitis molestias eveniet. Itaque, aliquam dolorem. Optio, quis...',
        time: Date.now(),
        title: 'Lorem Ipsum'
      }
    ]
  },
  argTypes: {
    posts: {
      control: {
        type: null
      }
    }
  }
} as Meta<BlogTemplateProps>

export const Default: StoryObj<BlogTemplateProps> = {}
