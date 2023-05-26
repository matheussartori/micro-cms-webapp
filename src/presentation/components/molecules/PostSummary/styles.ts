import { styled } from '@/presentation/styles/stitches.config'
import { Text } from '../../atoms/Text'
import { Panel } from '../../atoms/Panel'

export const Container = styled(Panel, {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  backgroundColor: 'transparent'
})

export const Time = styled(Text, {
  marginBottom: '0.5rem'
})

export const Title = styled(Text, {
  color: '$gray100',

  '&:hover': {
    color: '$white'
  }
})

export const ShortContent = styled(Text, {})
