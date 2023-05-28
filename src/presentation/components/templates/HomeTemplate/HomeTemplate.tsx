import { ReactNode } from 'react'
import { Hero } from '../../atoms/Hero'
import { Container } from './styles'

export interface HomeTemplateProps {
  heroImg: string
  firstArticle: ReactNode
  secondArticle: ReactNode
}

export function HomeTemplate({
  heroImg,
  firstArticle,
  secondArticle
}: HomeTemplateProps) {
  return (
    <>
      <Hero
        data-testid="main-hero"
        src={heroImg}
      />
      <Container data-testid="articles">
        {firstArticle}
        {secondArticle}
      </Container>
    </>
  )
}
