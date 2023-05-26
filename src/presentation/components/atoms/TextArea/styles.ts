import { styled } from '@/presentation/styles/stitches.config'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray800',
  flex: 1,
  color: '$gray100',
  fontSize: '$sm',
  outline: 'none',
  border: 'none',
  padding: '0.5rem',
  borderRadius: 6,
  resize: 'vertical',

  '&:placeholder': {
    color: '$gray400'
  }
})
