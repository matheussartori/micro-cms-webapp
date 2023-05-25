import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import { BlogPostItem } from '@/data/models/blog-post-item'
import { Container, ShortContent, Time, Title } from './styles'

export type PostItemProps = ComponentProps<typeof Container> & BlogPostItem

export function PostItem({ time, title, shortContent, id, ...props}: PostItemProps) {
  return (
    <Container {...props}>
      <Time as="time">{time}</Time>
      <Link to={`/blog/read/${id}`}>
        <Title as="h2">{title}</Title>
      </Link>
      <ShortContent>{shortContent}</ShortContent>
    </Container>
  )
}
