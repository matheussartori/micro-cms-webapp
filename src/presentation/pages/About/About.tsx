import { AboutTemplate } from '@/presentation/components/templates/AboutTemplate'
import { Tech } from '@/presentation/components/templates/AboutTemplate/AboutTemplate'

import stitchesLogoImg from '@/presentation/assets/techs/stitches.png'
import { Text } from '@/presentation/components/atoms/Text'

const techs: Tech[] = [
  {
    externalUrl: 'https://stitches.dev',
    image: stitchesLogoImg
  }
]

export function About() {
  return (
    <AboutTemplate
      techs={techs}
    >
      <Text as="h2" css={{ marginBottom: '0.75rem', color: '$gray100' }}>About</Text>
      <Text css={{ marginBottom: '0.5rem' }}>This micro CMS web application allows you to create and modify posts on the blog page. All the content is stored locally, ensuring that your data is saved directly in your browser.</Text>
      <Text css={{ marginBottom: '0.5rem' }}>The post content supports HTML, but it doesn't have an integrated HTML editor. Therefore, it would be beneficial to use another tool for editing the HTML.</Text>
    </AboutTemplate>
  )
}
