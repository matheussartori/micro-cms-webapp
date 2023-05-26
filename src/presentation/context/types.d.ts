import { PostModel } from '@/data/models/post-model'
import { ReactNode } from 'react'

export type CreatePostParams = Omit<PostModel, 'id'>

export type UpdatePostParams = Omit<PostModel, 'time'>

export interface PostContextData {
  posts: PostModel[]
  findPostById: (id: string) => PostModel
  createPost: (data: CreatePostParams) => string
  updatePost: (data: UpdatePostParams) => void
  searchPostsByTerm: (term: string) => PostModel[]
}

export interface PostProviderProps {
  children: ReactNode
}
