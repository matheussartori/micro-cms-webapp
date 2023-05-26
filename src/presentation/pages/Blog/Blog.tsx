import { BlogTemplate } from '@/presentation/components/templates/BlogTemplate'
import { usePost } from '@/presentation/hooks/usePost'

export function Blog() {
  const { posts } = usePost()

  return (
    <BlogTemplate
      posts={posts}
    />
  )
}
