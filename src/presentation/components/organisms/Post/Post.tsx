import { PostModel } from '@/data/models/post-model'
import { Actions, Container, HtmlContainer, Time, Title } from './styles'
import { Button } from '../../atoms/Button'
import { Link } from 'react-router-dom'
import { PencilSimple } from '@phosphor-icons/react'
import { format } from 'date-fns'

export type PostProps = PostModel

export function Post({ id, title, time, content }: PostProps) {
  return (
    <Container>
      <Title as="h1" data-testid="post-title">{title}</Title>
      <Time as="time">{format(time, 'MMM d, yyyy')}</Time>
      <HtmlContainer data-testid="post-content" dangerouslySetInnerHTML={{ __html: content }} />
      <Actions>
        <Link to={`/blog/edit/${id}`}>
          <Button data-testid="edit-post-button">
            <PencilSimple />Edit post
          </Button>
        </Link>
      </Actions>
    </Container>
  )
}
