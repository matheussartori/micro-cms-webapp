import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils.tsx'
import { Post } from './Post.tsx'

describe('PostModel Component', () => {
  it('should render with correct props', () => {
    renderWithBrowserRouter(
      <Post
        title="Lorem Ipsum"
        id="any"
        content={'<p>content goes here</p>'}
        time='May 25, 2023'
      />
    )

    const postComponent = screen.getByText(/content goes here/i)

    expect(postComponent).toBeDefined()
  })
})
