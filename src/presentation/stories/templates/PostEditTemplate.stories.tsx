import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { PostEditTemplate, type PostEditTemplateProps } from '../../components/templates/PostEditTemplate'
import { Header } from '../../components/organisms/Header'
import { PostProvider } from '@/presentation/context/PostContext'

export default {
  title: 'Templates/PostEditTemplate',
  component: PostEditTemplate,
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
} as Meta<PostEditTemplateProps>

export const Default: StoryObj<PostEditTemplateProps> = {}
