import { PostEditTemplate } from '@/presentation/components/templates/PostEditTemplate'
import { usePost } from '@/presentation/hooks/usePost'
import { useParams } from 'react-router-dom'

export function PostEdit() {
  const { postId } = useParams()

  const { posts } = usePost()

  const post = posts.find(post => post.id === postId)

  if (!post) {
    return null
  }


  return (
    <PostEditTemplate
      id={post.id}
      content={post.content}
      time={post.time}
      title={post.title}
    />
  )
}
