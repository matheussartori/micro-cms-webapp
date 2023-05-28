import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { ContactTemplate, type ContactTemplateProps } from '../../components/templates/ContactTemplate'
import { Header } from '../../components/organisms/Header'
import { Text } from '../../components/atoms/Text'
import { PostProvider } from '@/presentation/context/PostContext'

export default {
  title: 'Templates/ContactTemplate',
  component: ContactTemplate,
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
    imageUrl: 'https://github.com/matheussartori.png',
    children: (
      <Text>Here you can insert info about this specific page.</Text>
    )
  }
} as Meta<ContactTemplateProps>

export const Default: StoryObj<ContactTemplateProps> = {}
