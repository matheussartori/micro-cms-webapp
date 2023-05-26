import { styled } from '@/presentation/styles/stitches.config'
import { Panel } from '../../atoms/Panel'

export const Image = styled('img', {
  width: 50,
  height: 50,
  objectFit: 'contain'
})

export const PanelContainer = styled(Panel, {
  padding: '2rem'
})
