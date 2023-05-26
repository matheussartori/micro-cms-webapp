import { AboutTemplate } from '@/presentation/components/templates/AboutTemplate'

import { Text } from '@/presentation/components/atoms/Text'
import { techs } from './techs'

export function About() {
  return (
    <AboutTemplate
      techs={techs}
    >
      <Text as="h2" css={{ marginBottom: '0.75rem', color: '$gray100' }}>About</Text>
      <Text css={{ marginBottom: '0.5rem' }}>
        This micro CMS web application allows you to create and modify posts on the blog page.
        All the content is stored locally, ensuring that your data is saved directly in your browser.
      </Text>
      <Text css={{ marginBottom: '0.5rem' }}>
        The post content supports HTML, but it doesn't have an integrated HTML editor.
        Therefore, it would be beneficial to use another tool for editing the HTML.
      </Text>
    </AboutTemplate>
  )
}
