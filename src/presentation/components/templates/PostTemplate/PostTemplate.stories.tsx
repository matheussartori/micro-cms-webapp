import type { Meta, StoryObj } from '@storybook/react'
import { PostTemplate, type PostTemplateProps } from './'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../../organisms/Header'

export default {
  title: 'Templates/PostTemplate',
  component: PostTemplate,
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
    time: new Date(),
    title: 'Lorem Ipsum'
  },
  argTypes: {
    posts: {
      control: {
        type: null
      }
    }
  }
} as Meta<PostTemplateProps>

export const Default: StoryObj<PostTemplateProps> = {}
