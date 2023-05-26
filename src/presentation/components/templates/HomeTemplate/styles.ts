import { styled } from '@/presentation/styles/stitches.config'

export const Container = styled('div', {
  maxWidth: 1120,
  margin: '3.5rem auto',
  padding: '0 2rem',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '3rem',

  '@mobile': {
    gridTemplateColumns: '1fr'
  }
})
