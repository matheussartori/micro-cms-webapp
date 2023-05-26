import type { Meta, StoryObj } from '@storybook/react'
import { ContactTemplate } from './'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../../organisms/Header'

export default {
  title: 'Templates/ContactTemplate',
  component: ContactTemplate,
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
