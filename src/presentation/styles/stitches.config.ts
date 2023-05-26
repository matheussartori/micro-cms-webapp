import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  media: {
    mobile: '(max-width: 767px)'
  },
  theme: {
    colors: {
      white: '#FFFFFF',

      gray100: '#e1e1e6',
      gray200: '#cdcdd0',
      gray300: '#a8a8b3',
      gray700: '#323238',
      gray800: '#29292e',
      gray850: '#1e1e21',
      gray900: '#121214',

      cyan500: '#61dafb',
      cyan300: '#7ddbf5',
      yellow500: '#eba417'
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem'
    },

    fonts: {
      default: 'Roboto, sans-serif'
    }
  }
})
