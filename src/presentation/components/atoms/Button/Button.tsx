import { styled } from '@/presentation/styles/stitches.config'
import { ComponentProps, ReactNode } from 'react'

export interface ButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode
}

export const Button = styled('button', {
  padding: '0.5rem 1rem',
  backgroundColor: '$cyan500',
  borderRadius: '6px',
  border: 'none',
  fontSize: '$sm',
  height: 35,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  '&:hover': {
    transition: 'background-color 0.2s',
    backgroundColor: '$cyan300'
  }
})
