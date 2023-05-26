import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { AboutTemplate, type AboutTemplateProps } from './'
import { Header } from '../../organisms/Header'
import stitchesLogoImg from '@/presentation/assets/techs/stitches.png'

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
    ]
  }
} as Meta<AboutTemplateProps>

export const Default: StoryObj<AboutTemplateProps> = {}
