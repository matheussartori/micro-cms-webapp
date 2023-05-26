import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { AboutTemplate, type AboutTemplateProps } from './'
import { Header } from '../../organisms/Header'
import stitchesLogoImg from '@/presentation/assets/techs/stitches.png'
import { Text } from '../../atoms/Text'

export default {
  title: 'Templates/AboutTemplate',
  component: AboutTemplate,
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
