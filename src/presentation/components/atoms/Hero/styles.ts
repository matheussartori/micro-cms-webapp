import { styled } from '@/presentation/styles/stitches.config'

export const Container = styled('div', {
  width: '100%',
  display: 'flex'
})

export const Image = styled('img', {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',

  variants: {
    secondary: {
      true: {
        borderRadius: 6
      }
    }
  }
})
