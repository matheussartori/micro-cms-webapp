import { PostModel } from '@/data/models/post-model'
import { PostEditTemplate } from '@/presentation/components/templates/PostEditTemplate'
import { useLocalStorageState } from '@/presentation/hooks/useLocalStorageState'
import { useParams } from 'react-router-dom'

export function PostEdit() {
  const { postId } = useParams()

  const [posts] = useLocalStorageState<PostModel[]>('@microcms/posts')

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
