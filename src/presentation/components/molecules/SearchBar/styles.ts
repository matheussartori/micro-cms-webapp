import { styled } from '@/presentation/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '@mobile': {
    justifyContent: 'center'
  }
})
