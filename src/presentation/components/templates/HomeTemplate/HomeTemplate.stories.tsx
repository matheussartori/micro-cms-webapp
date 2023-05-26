import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { HomeTemplate, type HomeTemplateProps } from './'
import { Header } from '../../organisms/Header'
import heroImg from '@/presentation/assets/hero.png'
import { Text } from '../../atoms/Text'

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
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
