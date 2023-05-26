import { PostModel } from '@/data/models/post-model.ts'
import { Actions, Container, HtmlContainer, Time, Title } from './styles.ts'
import { Button } from '../../atoms/Button'
import { Link } from 'react-router-dom'
import { PencilSimple } from '@phosphor-icons/react'

export type PostProps = PostModel

export function Post({ id, title, time, content }: PostProps) {
  return (
    <Container>
      <Title as="h1">{title}</Title>
      <Time as="time">{time.toISOString()}</Time>
      <HtmlContainer dangerouslySetInnerHTML={{ __html: content }} />
      <Actions>
        <Link to={`/blog/edit/${id}`}>
          <Button>
            <PencilSimple />Edit post
          </Button>
        </Link>
      </Actions>
    </Container>
  )
}
