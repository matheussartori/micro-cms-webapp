import { PostModel } from '@/data/models/post-model'
import { ReactNode, createContext } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

export interface PostContextData {
  posts: PostModel[]
}

interface PostProviderProps {
  children: ReactNode
}

export const PostContext = createContext<PostContextData>({} as PostContextData)

export function PostProvider({ children }: PostProviderProps) {
  const [posts] = useLocalStorageState<PostModel[]>('@microcms/posts', [
    {
      id: '14f05b98-8733-49fe-8cdb-f7bf71d8afbf',
      content: '1',
      time: 'May 25, 2023',
      title: 'Test'
    },
    {
      id: 'f20edb22-f0df-4a3f-a218-7adc6a03bc65',
      content: '12',
      time: 'May 25, 2023',
      title: 'Another test'
    }
  ])

  return (
    <PostContext.Provider value={{ posts }}>
      {children}
    </PostContext.Provider>
  )
}
