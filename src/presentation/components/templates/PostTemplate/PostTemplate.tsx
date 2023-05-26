import { PostModel } from '@/data/models/post-model.ts'
import { Container } from './styles'
import { Post } from '../../organisms/Post'

export type PostTemplateProps = PostModel

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
