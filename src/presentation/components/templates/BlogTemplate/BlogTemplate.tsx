import { BlogPost } from '@/data/models/blog-post.ts'
import { Container, PostItem } from './styles.ts'

export interface BlogTemplateProps {
  posts: BlogPost[]
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
