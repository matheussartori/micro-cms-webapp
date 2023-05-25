import { styled } from '@/presentation/styles/stitches.config'
import { ComponentProps } from 'react'

export type PanelProps = ComponentProps<typeof Panel>

export const Panel = styled('div', {
  width: '100%',
  borderRadius: 6,
  padding: '1rem',
  backgroundColor: '$gray850'
})
