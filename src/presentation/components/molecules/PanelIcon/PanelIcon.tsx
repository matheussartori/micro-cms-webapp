import { ComponentProps } from 'react'
import { Image } from './styles'
import { Link } from 'react-router-dom'
import { Panel } from '../../atoms/Panel'

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
      <Panel glowBorder={glowBorder}>
        <Image {...props} />
      </Panel>
    </Link>
  )
}
