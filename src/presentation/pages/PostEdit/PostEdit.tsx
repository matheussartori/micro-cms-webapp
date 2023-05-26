import { useNavigate, useParams } from 'react-router-dom'

import { PostModel } from '@/data/models/post-model'
import { PostEditTemplate } from '@/presentation/components/templates/PostEditTemplate'
import { usePost } from '@/presentation/hooks/usePost'

export function PostEdit() {
  const { postId } = useParams()
  const navigate = useNavigate()

  const { findPostById, updatePost } = usePost()

  const post = findPostById(String(postId))

  function handleEditPost(post: Omit<PostModel, 'time'>) {
    updatePost({
      id: post.id,
      content: post.content,
      title: post.title
    })

    navigate(`/blog/read/${post.id}`)
  }

  return (
    <PostEditTemplate
      id={post.id}
      content={post.content}
      time={post.time}
      title={post.title}
      onSave={handleEditPost}
    />
  )
}
