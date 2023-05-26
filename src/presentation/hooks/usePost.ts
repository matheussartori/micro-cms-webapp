import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { PostContextData } from '../context/types'

export function usePost (): PostContextData {
  const context = useContext(PostContext)

  if (!context) {
    throw new Error('usePost must be used within an PostProvider.')
  }

  return context
}
