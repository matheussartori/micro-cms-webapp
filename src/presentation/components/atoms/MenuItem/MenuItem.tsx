import { styled } from '@/presentation/styles/stitches.config'
import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

export interface MenuItemProps extends ComponentProps<typeof MenuItem> {
  children: string
}

export const MenuItem = styled(Link, {
  fontFamily: '$default',
  display: 'inline-block',
  cursor: 'pointer',

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
