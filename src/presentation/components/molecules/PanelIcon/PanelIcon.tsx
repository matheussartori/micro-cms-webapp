import { ComponentProps } from 'react'
import { Image, PanelContainer } from './styles'
import { Link } from 'react-router-dom'

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
    <Link to={externalUrl} target="_blank" data-testid="panel-icon">
      <PanelContainer glowBorder={glowBorder}>
        <Image {...props} />
      </PanelContainer>
    </Link>
  )
}
