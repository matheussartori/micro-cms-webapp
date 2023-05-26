import { styled } from '@/presentation/styles/stitches.config'
import { Text } from '../../atoms/Text'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: 1120,
  margin: '2rem auto',
  padding: '0 2rem'
})

export const Grid = styled('div', {
  margin: '2rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  justifyContent: 'center'
})

export const Title = styled(Text, {
  color: '$gray100',
  display: 'block',
  fontSize: '$md'
})
