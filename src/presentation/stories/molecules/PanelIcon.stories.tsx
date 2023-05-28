import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { PanelIcon, type PanelIconProps } from '../../components/molecules/PanelIcon'
import stitchesLogoImg from '@/presentation/assets/techs/stitches.png'

export default {
  title: 'Molecules/PanelIcon',
  component: PanelIcon,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          {Story()}
        </BrowserRouter>
      )
    }
  ],
  args: {
    externalUrl: 'https://stitches.dev/',
    glowBorder: true,
    src: stitchesLogoImg
  },
  argTypes: {
    css: {
      control: {
        type: null
      }
    }
  }
} as Meta<PanelIconProps>

export const Default: StoryObj<PanelIconProps> = {}
