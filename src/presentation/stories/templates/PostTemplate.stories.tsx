import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { PostTemplate, type PostTemplateProps } from '../../components/templates/PostTemplate'
import { Header } from '../../components/organisms/Header'
import { PostProvider } from '@/presentation/context/PostContext'

export default {
  title: 'Templates/PostTemplate',
  component: PostTemplate,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <PostProvider>
            <Header />
            {Story()}
          </PostProvider>
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
} as Meta<PostTemplateProps>

export const Default: StoryObj<PostTemplateProps> = {}
