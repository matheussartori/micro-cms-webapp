import { styled } from '@/presentation/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  height: 30,
  padding: '0.5rem 1rem',
  borderRadius: 6,
  backgroundColor: '$gray800'
})

export const Input = styled('input', {
  backgroundColor: 'transparent',
  flex: 1,
  color: '$gray100',
  fontSize: '$sm',
  outline: 'none',
  border: 'none',

  '&:placeholder': {
    color: '$gray400'
  }
})
