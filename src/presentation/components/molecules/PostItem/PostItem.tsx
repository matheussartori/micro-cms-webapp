import { ComponentProps } from 'react'
import { Container, ShortContent, Time, Title } from './styles'
import { Link } from 'react-router-dom'

export interface PostItemProps extends ComponentProps<typeof Container> {
  time: string
  title: string
  shortContent: string
  post: {
    id: string
  }
}

export function PostItem({ time, title, shortContent, post, ...props}: PostItemProps) {
  return (
    <Container {...props}>
      <Time as="time">{time}</Time>
      <Link to={`/blog/read/${post.id}`}>
        <Title as="h2">{title}</Title>
      </Link>
      <ShortContent>{shortContent}</ShortContent>
    </Container>
  )
}
