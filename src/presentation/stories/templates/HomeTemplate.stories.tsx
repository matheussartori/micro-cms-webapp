import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { HomeTemplate, type HomeTemplateProps } from '../../components/templates/HomeTemplate'
import { Header } from '../../components/organisms/Header'
import heroImg from '@/presentation/assets/hero.png'
import { Text } from '../../components/atoms/Text'
import { PostProvider } from '@/presentation/context/PostContext'

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
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
    heroImg,
    firstArticle: (
      <Text>First article goes here</Text>
    ),
    secondArticle: (
      <Text>Second article goes here</Text>
    )
  },
  argTypes: {
    firstArticle: {
      control: {
        type: 'text'
      }
    },
    secondArticle: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<HomeTemplateProps>

export const Default: StoryObj<HomeTemplateProps> = {}
