import { describe, expect, it } from 'vitest'
import { act, fireEvent, render, screen } from '@/tests/test-utils'
import { usePost } from '../hooks/usePost'
import { useState } from 'react'
import { PostModel } from '@/data/models/post-model'

function PostContextTestComponent() {
  const { createPost, posts, updatePost, searchPostsByTerm, findPostById } = usePost()
  const [searchedPosts, setSearchedPosts] = useState<PostModel[]>([])
  const [searchedPost, setSearchedPost] = useState<PostModel | null>(null)

  return (
    <div>
      <div data-testid="current-count-post-test">Current count: {posts.length}</div>
      <div data-testid="all-posts-test">{JSON.stringify(posts)}</div>
      <div data-testid="searched-posts-test">{JSON.stringify(searchedPosts)}</div>
      <div data-testid="searched-post-test">{JSON.stringify(searchedPost)}</div>

      <button onClick={() => createPost({
        content: 'content',
        time: Date.now(),
        title: 'title'
      })} data-testid="create-post-test">Create Post</button>

      <button onClick={() => updatePost({
        content: 'updated_content',
        id: posts[posts.length - 1].id,
        title: 'updated_title'
      })} data-testid="update-post-test">Create Post</button>

      <button onClick={() => {
        const posts = searchPostsByTerm('updated_title')
        setSearchedPosts(posts)
      }} data-testid="search-post-test">Search Post</button>

      <button onClick={() => {
        const post = findPostById(posts[posts.length - 1].id)
        setSearchedPost(post)
      }} data-testid="find-post-test">Find Post</button>
    </div>
  )
}

describe('PostContext', () => {
  it('should initialize with 2 default posts', () => {
    render(<PostContextTestComponent />)

    const currentCount = screen.getByTestId('current-count-post-test')

    expect(currentCount.textContent).toBe('Current count: 2')
  })

  it('should be able to create a post', async () => {
    render(<PostContextTestComponent />)

    const createPostButton = screen.getByTestId('create-post-test')

    act(() => {
      fireEvent.click(createPostButton)
    })

    const currentCount = await screen.findByTestId('current-count-post-test')

    expect(currentCount.textContent).toBe('Current count: 3')
  })

  it('should be able to edit a post', async () => {
    render(<PostContextTestComponent />)

    const updatePostButton = screen.getByTestId('update-post-test')

    act(() => {
      fireEvent.click(updatePostButton)
    })

    const searchedPosts = await screen.findByTestId('all-posts-test')

    expect(searchedPosts.textContent).toContain('updated_title')
    expect(searchedPosts.textContent).toContain('updated_content')
  })

  it('should be able to search a post by term', async () => {
    render(<PostContextTestComponent />)

    const findPostButton = screen.getByTestId('find-post-test')

    act(() => {
      fireEvent.click(findPostButton)
    })

    const searchedPost = await screen.findByTestId('searched-post-test')

    expect(JSON.parse(String(searchedPost.textContent))).toHaveProperty('id')
    expect(JSON.parse(String(searchedPost.textContent))).toHaveProperty('title')
    expect(JSON.parse(String(searchedPost.textContent))).toHaveProperty('time')
    expect(JSON.parse(String(searchedPost.textContent))).toHaveProperty('content')
  })
})
