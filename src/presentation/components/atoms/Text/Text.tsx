import { styled } from '@/presentation/styles/stitches.config'
import { ComponentProps, ElementType, ReactNode } from 'react'

export interface TextProps extends ComponentProps<typeof Text> {
  children: ReactNode
  size: 'xs' | 'sm' | 'md' | 'lg' |'xl'
  as?: ElementType
}

export const Text = styled('p', {
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
