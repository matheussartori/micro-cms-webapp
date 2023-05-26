import { PostModel } from '@/data/models/post-model'
import { ReactNode } from 'react'

export type CreatePostParams = Omit<PostModel, 'id'>

export type UpdatePostParams = PostModel

export interface PostContextData {
  posts: PostModel[]
  findPostById: (id: string) => PostModel
  createPost: (data: CreatePostParams) => void
  updatePost: (data: UpdatePostParams) => void
  searchPostsByTerm: (term: string) => PostModel[]
}

export interface PostProviderProps {
  children: ReactNode
}
