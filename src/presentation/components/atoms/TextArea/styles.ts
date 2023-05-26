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
  display: 'flex',
  width: '100%',
  height: '30rem',

  '&:placeholder': {
    color: '$gray400'
  }
})
