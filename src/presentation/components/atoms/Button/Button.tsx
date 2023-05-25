import { styled } from '@/presentation/styles/stitches.config'
import { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<typeof Button> {
  children: string
}

export const Button = styled('button', {
  padding: '0.5rem 1rem',
  backgroundColor: '$cyan500',
  borderRadius: '6px',
  border: 'none',
  fontSize: '$sm',
  height: 35,

  '&:hover': {
    transition: 'background-color 0.2s',
    backgroundColor: '$cyan300'
  }
})
