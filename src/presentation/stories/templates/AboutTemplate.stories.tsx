import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { AboutTemplate, type AboutTemplateProps } from '../../components/templates/AboutTemplate'
import { Header } from '../../components/organisms/Header'
import stitchesLogoImg from '@/presentation/assets/techs/stitches.png'
import { Text } from '../../components/atoms/Text'
import { PostProvider } from '@/presentation/context/PostContext'

export default {
  title: 'Templates/AboutTemplate',
  component: AboutTemplate,
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
    techs: [
      {
        externalUrl: 'https://stitches.dev/',
        image: stitchesLogoImg
      }
    ],
    children: (
      <Text>Here you can insert info about this specific page.</Text>
    )
  },
  argTypes: {
    techs: {
      control: {
        type: null
      }
    },
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<AboutTemplateProps>

export const Default: StoryObj<AboutTemplateProps> = {}
