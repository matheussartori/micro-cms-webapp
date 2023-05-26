import { PostTemplate } from '@/presentation/components/templates/PostTemplate'
import { usePost } from '@/presentation/hooks/usePost'
import { useParams } from 'react-router-dom'

export function Post() {
  const { postId } = useParams()

  const { posts } = usePost()

  const post = posts.find(post => post.id === postId)

  if (!post) {
    return null
  }

  return (
    <PostTemplate
      id={post.id}
      content={post.content}
      time={post.time}
      title={post.title}
    />
  )
}
