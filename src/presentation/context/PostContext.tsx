import { createContext } from 'react'
import { v4 as uuid } from 'uuid'

import { PostModel } from '@/data/models/post-model'
import { useLocalStorageState } from '@/presentation/hooks/useLocalStorageState'
import { CreatePostParams, PostContextData, PostProviderProps, UpdatePostParams } from './types'

export const PostContext = createContext<PostContextData>({} as PostContextData)

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useLocalStorageState<PostModel[]>('@microcms/posts', [
    {
      id: '14f05b98-8733-49fe-8cdb-f7bf71d8afbf',
      content: '1',
      time: Date.now(),
      title: 'Test'
    },
    {
      id: 'f20edb22-f0df-4a3f-a218-7adc6a03bc65',
      content: '12',
      time: Date.now(),
      title: 'Another test'
    }
  ])

  function findPostById(id: string): PostModel {
    const post = posts.find(post => post.id === id)

    if (!post) {
      throw new Error('Post not found.')
    }

    return post
  }

  function createPost({ content, time, title }: CreatePostParams): string {
    const post = {
      id: uuid(),
      content,
      time,
      title
    }

    setPosts([...posts, post])

    return post.id
  }

  function updatePost({ id, content, title }: UpdatePostParams): void {
    const postExists = findPostById(id)

    if (!postExists) {
      throw new Error('Post not found.')
    }

    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          content,
          title
        }
      }

      return post
    })

    setPosts(updatedPosts)
  }

  function searchPostsByTerm(term: string): PostModel[] {
    const filteredPosts = posts.filter(post => {
      return post.title.toLowerCase().includes(term.toLowerCase()) || post.content.toLowerCase().includes(term.toLowerCase())
    })

    return filteredPosts
  }

  return (
    <PostContext.Provider value={{
      posts,
      findPostById,
      createPost,
      updatePost,
      searchPostsByTerm
    }}>
      {children}
    </PostContext.Provider>
  )
}
