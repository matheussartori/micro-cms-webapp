import { PostModel } from '@/data/models/post-model.ts'
import { Actions, Container, PostItem } from './styles.ts'
import { Button } from '../../atoms/Button/Button.tsx'
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
          <Button>
            <Plus />
          Add post
          </Button>
        </Link>
      </Actions>
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
