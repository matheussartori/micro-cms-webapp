import type { Meta, StoryObj } from '@storybook/react'
import { ContactTemplate, ContactTemplateProps } from './'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../../organisms/Header'
import { Text } from '../../atoms/Text'

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
  ],
  args: {
    imageUrl: 'https://github.com/matheussartori.png',
    children: (
      <Text>Here you can insert info about this specific page.</Text>
    )
  }
} as Meta<ContactTemplateProps>

export const Default: StoryObj<ContactTemplateProps> = {}
