import { ComponentProps } from 'react'
import { Container, Input } from './styles'
import { CSS } from '@stitches/react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  containerCss?: CSS
}

export function TextInput({ containerCss, ...props }: TextInputProps) {
  return (
    <Container css={containerCss}>
      <Input {...props} />
    </Container>
  )
}
