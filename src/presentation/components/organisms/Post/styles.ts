import { styled } from '@/presentation/styles/stitches.config.ts'
import { Text } from '../../atoms/Text'

export const Container = styled('article', {
  maxWidth: 1120,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
})

export const Title = styled(Text, {
  color: '$gray100',
  fontSize: '$3xl',
  fontWeight: 700
})

export const Time = styled(Text, {
  width: '100%',
  margin: '1.75rem 0'
})

export const HtmlContainer = styled('div', {
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$md'
})

export const Actions = styled('div', {
  display: 'flex',
  marginTop: '2rem',
  gap: '1rem'
})
