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
        boxShadow: '0 0 6px 3px $colors$cyan500',
        transition: 'box-shadow 0.2s',

        '&:hover': {
          boxShadow: '0 0 6px 3px $colors$yellow500'
        }
      }
    }
  }
})
