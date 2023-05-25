import { Panel } from '../../atoms/Panel'
import { ShortContent, Time, Title } from './styles'

export function PostItem() {
  return (
    <Panel>
      <Time as="time">24 May, 2023</Time>
      <Title as="h2"></Title>
      <ShortContent></ShortContent>
    </Panel>
  )
}
