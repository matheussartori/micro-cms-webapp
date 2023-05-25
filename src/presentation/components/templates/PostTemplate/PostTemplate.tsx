import { BlogPost } from '@/data/models/blog-post'
import { Container } from './styles'
import { Post } from '../../molecules/Post'

export type PostTemplateProps = BlogPost

export function PostTemplate({ id, content, time, title }: PostTemplateProps) {
  return (
    <Container>
      <Post
        id={id}
        content={content}
        time={time}
        title={title}
      />
    </Container>
  )
}
