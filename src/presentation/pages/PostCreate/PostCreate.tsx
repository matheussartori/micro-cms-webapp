import { useNavigate, useParams } from 'react-router-dom'

import { PostEditTemplate } from '@/presentation/components/templates/PostEditTemplate'
import { usePost } from '@/presentation/hooks/usePost'
import { OnSaveParams } from '@/presentation/components/templates/PostEditTemplate/PostEditTemplate'

export function PostCreate() {
  const navigate = useNavigate()

  const { createPost } = usePost()

  function handleCreatePost(post: OnSaveParams) {
    const postId = createPost({
      content: post.content,
      title: post.title,
      time: new Date().toISOString()
    })

    navigate(`/blog/read/${postId}`)
  }

  return (
    <PostEditTemplate
      onSave={handleCreatePost}
    />
  )
}
