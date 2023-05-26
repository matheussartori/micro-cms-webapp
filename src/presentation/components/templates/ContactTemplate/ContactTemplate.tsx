import { ReactNode } from 'react'
import { Container, Image, InfoContainer, PanelContainer } from './styles'

export interface ContactTemplateProps {
  imageUrl: string
  children: ReactNode
}

export function ContactTemplate({ imageUrl, children }: ContactTemplateProps) {
  return (
    <Container>
      <PanelContainer>
        <Image src={imageUrl} />
        <InfoContainer>
          {children}
        </InfoContainer>
      </PanelContainer>
    </Container>
  )
}
