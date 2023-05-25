import { BlogPost } from '@/data/models/blog-post'
import { Container, HtmlContainer, Time, Title } from './styles'

export type PostProps = BlogPost

export function Post({ title, time, content }: PostProps) {
  return (
    <Container>
      <Title as="h1">{title}</Title>
      <Time as="time">{time}</Time>
      <HtmlContainer dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}
