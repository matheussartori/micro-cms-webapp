import { ComponentProps } from 'react'
import { Container, Input } from './styles'

export type TextInputProps = ComponentProps<typeof Input>

export function TextInput(props: TextInputProps) {
  return (
    <Container>
      <Input {...props} />
    </Container>
  )
}
