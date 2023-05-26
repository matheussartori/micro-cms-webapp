import type { Meta, StoryObj } from '@storybook/react'
import { PostEditTemplate, type PostEditTemplateProps } from './'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../../organisms/Header'

export default {
  title: 'Templates/PostEditTemplate',
  component: PostEditTemplate,
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
    id: 'any',
    content: '<p>content goes here.</p> <p>this text is written with HTML tags.</p> <strong>STRONG TEXT</strong> <pre>PRE TEXT</pre>',
    time: Date.now(),
    title: 'Lorem Ipsum'
  },
  argTypes: {
    posts: {
      control: {
        type: null
      }
    }
  }
} as Meta<PostEditTemplateProps>

export const Default: StoryObj<PostEditTemplateProps> = {}
