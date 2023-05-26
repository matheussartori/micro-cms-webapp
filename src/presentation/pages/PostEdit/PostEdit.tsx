import { PostEditTemplate } from '@/presentation/components/templates/PostEditTemplate'
import { usePost } from '@/presentation/hooks/usePost'
import { useParams } from 'react-router-dom'

export function PostEdit() {
  const { postId } = useParams()

  const { findPostById } = usePost()

  const post = findPostById(String(postId))

  return (
    <PostEditTemplate
      id={post.id}
      content={post.content}
      time={post.time}
      title={post.title}
    />
  )
}
