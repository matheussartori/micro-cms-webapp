import { styled } from '@/presentation/styles/stitches.config'
import { ComponentProps } from 'react'

export type PanelProps = ComponentProps<typeof Panel>

export const Panel = styled('div', {
  width: '100%',
  borderRadius: 6,
  padding: '1rem',
  backgroundColor: '$gray850',

  variants: {
    glowBorder: {
      true: {
        boxShadow: '0 0 15px 4px $colors$cyan500',
        transition: 'box-shadow 0.2s, filter 0.2s',
        filter: 'grayscale(50%)',

        '&:hover': {
          boxShadow: '0 0 10px 2px $colors$yellow500',
          filter: 'grayscale(0%)'
        }
      }
    }
  }
})
