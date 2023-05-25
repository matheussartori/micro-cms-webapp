import { BlogPostItem } from '@/data/models/blog-post-item'
import { Container, PostItem } from './styles'

export interface BlogTemplateProps {
  posts: BlogPostItem[]
}

export function BlogTemplate({ posts }: BlogTemplateProps) {
  return (
    <Container>
      {posts.map(post => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          shortContent={post.shortContent}
          time={post.time}
        />
      ))}
    </Container>
  )
}
