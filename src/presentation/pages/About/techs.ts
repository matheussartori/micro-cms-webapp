import { Tech } from '@/presentation/components/templates/AboutTemplate/AboutTemplate'

import reactLogoImg from '@/presentation/assets/techs/react.png'
import stitchesLogoImg from '@/presentation/assets/techs/stitches.png'
import viteLogoImg from '@/presentation/assets/techs/vite.png'
import vitestLogoImg from '@/presentation/assets/techs/vitest.png'
import dateFnsLogoImg from '@/presentation/assets/techs/date-fns.png'
import cypressLogoImg from '@/presentation/assets/techs/cypress.png'

export const techs: Tech[] = [
  {
    externalUrl: 'https://react.dev',
    image: reactLogoImg
  },
  {
    externalUrl: 'https://stitches.dev',
    image: stitchesLogoImg
  },
  {
    externalUrl: 'https://vitejs.dev',
    image: viteLogoImg
  },
  {
    externalUrl: 'https://vitest.dev',
    image: vitestLogoImg
  },
  {
    externalUrl: 'https://date-fns.org',
    image: dateFnsLogoImg
  },
  {
    externalUrl: 'https://www.cypress.io',
    image: cypressLogoImg
  }
]
