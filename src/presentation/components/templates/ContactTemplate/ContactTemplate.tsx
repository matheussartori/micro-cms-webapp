import { ReactNode } from 'react'
import { Container, Image, InfoContainer, PanelContainer } from './styles'

export interface ContactTemplateProps {
  imageUrl: string
  children: ReactNode
}

export function ContactTemplate({ imageUrl, children }: ContactTemplateProps) {
  return (
    <Container data-testid="contact-container">
      <PanelContainer>
        <Image src={imageUrl} data-testid="contact-avatar" />
        <InfoContainer data-testid="contact-info">
          {children}
        </InfoContainer>
      </PanelContainer>
    </Container>
  )
}
