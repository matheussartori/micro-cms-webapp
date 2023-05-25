import { BlogPostItem } from '@/data/models/blog-post-item'
import { BlogTemplate } from '@/presentation/components/templates/BlogTemplate'

const posts: BlogPostItem[] = [
  {
    id: '1',
    shortContent: '1',
    time: '1',
    title: '1'
  },
  {
    id: '12',
    shortContent: '12',
    time: '12',
    title: '12'
  },
  {
    id: '126',
    shortContent: '126',
    time: '126',
    title: '126'
  },
  {
    id: '3434',
    shortContent: '3434',
    time: '3434',
    title: '3434'
  }
]

export function Blog() {
  return (
    <BlogTemplate
      posts={posts}
    />
  )
}
