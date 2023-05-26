import { styled } from '@/presentation/styles/stitches.config'
import { Text } from '../../atoms/Text'

export const Container = styled('form', {
  maxWidth: 1120,
  margin: '3.5rem auto',
  padding: '0 2rem'
})

export const Box = styled('div', {
  marginBottom: '2rem'
})

export const Label = styled(Text, {
  color: '$gray100',
  fontWeight: 500,
  fontSize: '$md',
  marginBottom: '0.5rem'
})
