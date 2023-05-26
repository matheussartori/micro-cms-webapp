import { PostModel } from '@/data/models/post-model.ts'
import { PostTemplate } from '@/presentation/components/templates/PostTemplate'
import { useLocalStorageState } from '@/presentation/hooks/useLocalStorageState.ts'
import { useParams } from 'react-router-dom'

export function Post() {
  const { postId } = useParams()

  const [posts] = useLocalStorageState<PostModel[]>('@microcms/posts')

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
