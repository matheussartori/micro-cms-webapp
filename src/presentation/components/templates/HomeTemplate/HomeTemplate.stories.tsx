import type { Meta, StoryObj } from '@storybook/react'
import { HomeTemplate } from './'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../../organisms/Header'

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
  ]
} as Meta

export const Default: StoryObj = {}
