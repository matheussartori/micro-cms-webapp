import { BlogPost } from '@/data/models/blog-post'
import { Actions, Container, HtmlContainer, Time, Title } from './styles'
import { Button } from '../../atoms/Button'
import { Link } from 'react-router-dom'
import { PencilSimple, TrashSimple } from '@phosphor-icons/react'

export type PostProps = BlogPost

export function Post({ id, title, time, content }: PostProps) {
  return (
    <Container>
      <Title as="h1">{title}</Title>
      <Time as="time">{time}</Time>
      <HtmlContainer dangerouslySetInnerHTML={{ __html: content }} />
      <Actions>
        <Link to={`/blog/edit/${id}`}>
          <Button>
            <PencilSimple />Edit post
          </Button>
        </Link>
        <Button variant="danger">
          <TrashSimple />Delete post
        </Button>
      </Actions>
    </Container>
  )
}
