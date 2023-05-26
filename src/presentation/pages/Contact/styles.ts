import { Text } from '@/presentation/components/atoms/Text'
import { styled } from '@/presentation/styles/stitches.config'

export const Title = styled(Text, {
  color: '$gray100',
  fontSize: '$xl'
})

export const Link = styled('a', {
  color: '$cyan500',

  '&:hover': {
    color: '$cyan300'
  }
})
