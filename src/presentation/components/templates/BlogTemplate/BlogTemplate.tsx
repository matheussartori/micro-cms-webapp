import { PostModel } from '@/data/models/post-model.ts'
import { Container, PostItem } from './styles.ts'

export interface BlogTemplateProps {
  posts: PostModel[]
}

export function BlogTemplate({ posts }: BlogTemplateProps) {
  return (
    <Container>
      {posts.map(post => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          time={post.time}
        />
      ))}
    </Container>
  )
}
