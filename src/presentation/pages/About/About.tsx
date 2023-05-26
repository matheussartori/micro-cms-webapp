import { AboutTemplate } from '@/presentation/components/templates/AboutTemplate'
import { Tech } from '@/presentation/components/templates/AboutTemplate/AboutTemplate'

import stitchesLogoImg from '@/presentation/assets/techs/stitches.png'

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
    />
  )
}
