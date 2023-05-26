import { styled } from '@/presentation/styles/stitches.config'

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
