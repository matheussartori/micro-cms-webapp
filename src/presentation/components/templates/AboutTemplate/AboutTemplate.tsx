import { Panel } from '../../atoms/Panel'
import { Text } from '../../atoms/Text'
import { PanelIcon } from '../../molecules/PanelIcon'
import { Container } from './styles'

type Tech = {
  externalUrl: string
  image: string
}

export interface AboutTemplateProps {
  techs: Tech[]
}

export function AboutTemplate({ techs }: AboutTemplateProps) {
  return (
    <Container>
      <Panel>
        <Text as="h2">This Micro CMS was developed.</Text>
      </Panel>
      <Panel>
        <Text as="h2">Technologies used</Text>
        {techs.map((tech) => (
          <PanelIcon
            key={tech.externalUrl}
            externalUrl={tech.externalUrl}
            src={tech.image}
            glowBorder
          />
        ))}
      </Panel>
    </Container>
  )
}
