import { HomeTemplate } from '@/presentation/components/templates/HomeTemplate'
import heroImg from '@/presentation/assets/hero.png'
import { ViteArticle } from './ViteArticle'
import { VanillaArticle } from './VanillaArticle'

export function Home() {
  return (
    <HomeTemplate
      heroImg={heroImg}
      firstArticle={<ViteArticle />}
      secondArticle={<VanillaArticle />}
    />
  )
}
