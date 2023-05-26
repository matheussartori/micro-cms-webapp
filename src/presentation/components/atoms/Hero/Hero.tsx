import { ComponentProps } from 'react'
import { Container, Image } from './styles'

export type HeroProps = ComponentProps<typeof Image>

export function Hero(props: HeroProps) {
  return (
    <Container data-testid="hero">
      <Image {...props} />
    </Container>
  )
}
