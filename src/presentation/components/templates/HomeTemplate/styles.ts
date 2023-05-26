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

export const VideoWrapper = styled('div', {
  position: 'relative',
  paddingBottom: '56.25%',
  paddingTop: 25,
  height: 0
})

export const VideoIFrame = styled('iframe', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
})
