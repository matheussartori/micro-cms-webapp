import { ComponentProps } from 'react'
import { Image, PanelContainer } from './styles'

export interface PanelIconProps extends ComponentProps<typeof Image> {
  externalUrl: string
  glowBorder?: boolean
}

export function PanelIcon({
  glowBorder = false,
  externalUrl,
  ...props
}: PanelIconProps) {
  return (
    <a href={externalUrl} target="_blank" data-testid="panel-icon">
      <PanelContainer glowBorder={glowBorder}>
        <Image {...props} />
      </PanelContainer>
    </a>
  )
}
