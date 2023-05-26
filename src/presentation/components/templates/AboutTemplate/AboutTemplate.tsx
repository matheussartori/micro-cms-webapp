import { ReactNode } from 'react'
import { Panel } from '../../atoms/Panel'
import { PanelIcon } from '../../molecules/PanelIcon'
import { Container, Grid, Title } from './styles'

export type Tech = {
  externalUrl: string
  image: string
}

export interface AboutTemplateProps {
  techs: Tech[]
  children: ReactNode
}

export function AboutTemplate({ techs, children }: AboutTemplateProps) {
  return (
    <Container>
      <Panel>
        {children}
      </Panel>
      <Panel>
        <Title as="h2" css={{ marginBottom: '0.75rem' }}>Technologies used</Title>
        <Grid>
          {techs.map((tech) => (
            <PanelIcon
              key={tech.externalUrl}
              externalUrl={tech.externalUrl}
              src={tech.image}
              glowBorder
            />
          ))}
        </Grid>
      </Panel>
    </Container>
  )
}
