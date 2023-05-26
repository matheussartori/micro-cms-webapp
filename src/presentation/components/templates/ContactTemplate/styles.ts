import { styled } from '@/presentation/styles/stitches.config'
import { Panel } from '../../atoms/Panel'

export const Container = styled('div', {
  maxWidth: 1120,
  margin: '3.5rem auto',
  padding: '0 2rem'
})

export const PanelContainer = styled(Panel, {
  display: 'flex',
  justifyContent: 'stretch',
  gap: '2rem',
  alignItems: 'center'
})

export const Image = styled('img', {
  width: 200,
  height: 200,
  borderRadius: '50%',
  border: '3px solid $cyan500'
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})
