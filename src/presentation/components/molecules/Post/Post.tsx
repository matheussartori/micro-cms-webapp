import { BlogPost } from '@/data/models/blog-post'
import { Container } from './styles'
import { Text } from '../../atoms/Text'

export interface PostProps {
  post: BlogPost
}

export function Post({ post }: PostProps) {
  return (
    <Container>
      <Text as="h1">{post.title}</Text>
      <Text as="time">{post.time}</Text>
      <Text __dangerouslySetInnerHTML={{ html: post.content }}/>
    </Container>
  )
}
