import { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

import { Container, ShortContent, Time, Title } from './styles'
import { PostModel } from '@/data/models/post-model.ts'

export type PostSummaryProps = ComponentProps<typeof Container> & PostModel

export function PostSummary({ time, title, content, id, ...props}: PostSummaryProps) {
  let contentWithoutHTMLTags = content.replace(/(<([^>]+)>)/gi, '')
  let isContentSliced = false

  if (content.length > 310) {
    contentWithoutHTMLTags = contentWithoutHTMLTags.slice(0, 300)
    isContentSliced = true
  }

  return (
    <Container data-testid="blog-post-item" {...props}>
      <Time as="time">{time.toISOString()}</Time>
      <Link to={`/blog/read/${id}`}>
        <Title as="h2">{title}</Title>
      </Link>
      <ShortContent data-testid="blog-post-item-content">{contentWithoutHTMLTags}{isContentSliced && '...'}</ShortContent>
    </Container>
  )
}
