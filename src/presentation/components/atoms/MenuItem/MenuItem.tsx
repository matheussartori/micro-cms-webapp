import { styled } from '@/presentation/styles/stitches.config'
import { ComponentProps, ElementType, ReactNode } from 'react'

export interface MenuItemProps extends ComponentProps<typeof MenuItem> {
  children: ReactNode
  size: 'xs' | 'sm' | 'md' | 'lg' |'xl'
  as?: ElementType
}

export const MenuItem = styled('p', {
  fontFamily: '$default',
  display: 'inline-block',

  position: 'relative',
  padding: '0 0.5rem',
  height: '5rem',
  lineHeight: '5rem',
  color: '$gray300',
  transition: 'color 0.2s',

  '& + a': {
    marginLeft: '2rem'
  },

  '&:hover': {
    color: '$white'
  },

  variants: {
    size: {
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' }
    },
    active: {
      true: {
        color: '$white',
        fontWeight: 'bold',

        '&::after': {
          content: '',
          height: '3px',
          borderRadius: '3px 3px 0 0',
          width: '100%',
          position: 'absolute',
          bottom: '1px',
          left: 0,
          backgroundColor: '$yellow500'
        }
      }
    }
  }
})
