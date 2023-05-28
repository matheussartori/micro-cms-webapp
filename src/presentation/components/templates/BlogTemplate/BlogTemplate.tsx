import { PostModel } from '@/data/models/post-model'
import { Actions, Container, PostContainer, PostItem } from './styles'
import { Button } from '../../atoms/Button'
import { Plus } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export interface BlogTemplateProps {
  posts: PostModel[]
}

export function BlogTemplate({ posts }: BlogTemplateProps) {
  return (
    <Container>
      <Actions>
        <Link to="/blog/create">
          <Button data-testid="blog-post-create-button">
            <Plus />
          Add post
          </Button>
        </Link>
      </Actions>
      <PostContainer data-testid="blog-post-container">
        {posts.map(post => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            time={post.time}
          />
        ))}
      </PostContainer>
    </Container>
  )
}
