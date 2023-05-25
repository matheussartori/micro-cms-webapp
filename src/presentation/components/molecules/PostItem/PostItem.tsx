import { ComponentProps } from 'react'
import { Container, ShortContent, Time, Title } from './styles'

export interface PostItemProps extends ComponentProps<typeof Container> {
  time: string
  title: string
  shortContent: string
  children: never
}

export function PostItem({ time, title, shortContent, ...props}: PostItemProps) {
  return (
    <Container {...props}>
      <Time as="time">{time}</Time>
      <Title as="h2">{title}</Title>
      <ShortContent>{shortContent}</ShortContent>
    </Container>
  )
}
