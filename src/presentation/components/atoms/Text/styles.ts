import { styled } from '@/presentation/styles/stitches.config'

export const TextComponent = styled('p', {
  fontFamily: '$default',
  display: 'inline-block',

  color: '$gray300',

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' }
    }
  }
})
