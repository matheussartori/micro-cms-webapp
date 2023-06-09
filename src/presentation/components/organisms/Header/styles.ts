import { styled } from '@/presentation/styles/stitches.config'

export const Container = styled('header', {
  height: '5rem',
  borderBottom: '1px solid $gray800',
  position: 'sticky',
  top: 0,
  backgroundColor: '$gray900',
  zIndex: 10
})

export const WideContent = styled('div', {
  maxWidth: 1120,
  height: '5rem',
  margin: '0 auto',
  padding: '0 2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@mobile': {
    display: 'none'
  }
})

export const MobileContent = styled('div', {
  height: '5rem',
  margin: '0 auto',
  padding: '0 2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',

  '@wide': {
    display: 'none'
  }
})

export const Navigation = styled('nav', {
  marginLeft: '5rem',
  height: '5rem'
})

export const MenuButton = styled('button', {
  lineHeight: 0,
  backgroundColor: 'transparent',
  border: 0
})

export const MobileNavigation = styled('nav', {
  display: 'none',
  position: 'fixed',
  flexDirection: 'column',
  top: '5rem',
  bottom: 0,
  left: 0,
  right: 0,
  height: 'calc(100vh - 5rem)',
  backgroundColor: '$gray900',
  padding: '2.5rem'
})
