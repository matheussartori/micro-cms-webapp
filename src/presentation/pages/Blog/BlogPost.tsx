import { BlogPost as BlogPostModel } from '@/data/models/blog-post'
import { PostTemplate } from '@/presentation/components/templates/PostTemplate'

const post: BlogPostModel = {
  content: '<p>Test content</p>',
  id: 'any',
  time: 'May 25, 2023',
  title: 'Lorem Ipsum'
}

export function BlogPost() {
  return (
    <PostTemplate
      id={post.id}
      content={post.content}
      time={post.time}
      title={post.title}
    />
  )
}
