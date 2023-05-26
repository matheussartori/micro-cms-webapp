import { BlogPost as BlogPostModel } from '@/data/models/blog-post'
import { PostTemplate } from '@/presentation/components/templates/PostTemplate'
import { useLocalStorageState } from '@/presentation/hooks/useLocalStorageState'
import { useParams } from 'react-router-dom'

export function BlogPost() {
  const { postId } = useParams()

  const [posts] = useLocalStorageState<BlogPostModel[]>('@microcms/posts')

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
