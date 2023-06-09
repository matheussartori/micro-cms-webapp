import type { Meta, StoryObj } from '@storybook/react'
import { Panel, PanelProps } from '../../components/atoms/Panel'
import { Text } from '../../components/atoms/Text'

export default {
  title: 'Atoms/Panel',
  component: Panel,
  argTypes: {
    css: {
      control: {
        type: null
      }
    },
    as: {
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
} as Meta<PanelProps>

export const Default: StoryObj<PanelProps> = {
  args: {
    css: {
      height: 300
    }
  }
}

export const GlowBorder: StoryObj<PanelProps> = {
  args: {
    css: {
      height: 200,
      width: 200
    },
    glowBorder: true
  }
}


export const WithTextContent: StoryObj<PanelProps> = {
  args: {
    children: (
      <>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fuga autem aperiam quis, consequatur commodi cupiditate beatae earum tenetur illo molestiae debitis molestias eveniet. Itaque, aliquam dolorem. Optio, quis ea!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fuga autem aperiam quis, consequatur commodi cupiditate beatae earum tenetur illo molestiae debitis molestias eveniet. Itaque, aliquam dolorem. Optio, quis ea!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fuga autem aperiam quis, consequatur commodi cupiditate beatae earum tenetur illo molestiae debitis molestias eveniet. Itaque, aliquam dolorem. Optio, quis ea!</Text>
      </>
    )
  }
}
