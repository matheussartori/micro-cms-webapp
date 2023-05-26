import { useContext } from 'react'
import { PostContext, PostContextData } from '../context/PostContext'

export function usePost (): PostContextData {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error('usePost must be used within an PostProvider.')
  }

  return context
}
