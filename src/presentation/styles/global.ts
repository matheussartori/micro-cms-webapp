import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    scrollbarWidth: 'auto',
    scrollbarColor: '$cyan500 $gray900'
  },

  body: {
    backgroundColor: '$gray900',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',
    overflowY: 'scroll'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  },

  'html': {
    '@media (max-width: 1080px)': {
      fontSize: '93.75%'
    },

    '@media (max-width: 720px)': {
      fontSize: '87.5%'
    }
  },

  'button': {
    cursor: 'pointer'
  },

  'a': {
    color: 'inherit',
    textDecoration: 'none'
  },

  '&::-webkit-scrollbar': {
    width: 14
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray900'
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$cyan500',
    borderRadius: 10,
    border: '3px solid $gray900'
  },

  '::-webkit-scrollbar-corner': {
    background: 'transparent'
  }
})
