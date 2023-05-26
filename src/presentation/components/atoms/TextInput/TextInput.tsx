import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Container, Input } from './styles'
import { CSS } from '@stitches/react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  containerCss?: CSS
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ containerCss, ...props }: TextInputProps, ref) => {
    return (
      <Container css={containerCss}>
        <Input ref={ref} {...props} />
      </Container>
    )
  }
)
