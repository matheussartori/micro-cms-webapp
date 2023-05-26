import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'
import { Post } from './Post'

describe('PostModel Component', () => {
  it('should render with correct props', () => {
    renderWithBrowserRouter(
      <Post
        title="Lorem Ipsum"
        id="any"
        content={'<p>content goes here</p>'}
        time={Date.now()}
      />
    )

    const postComponent = screen.getByText(/content goes here/i)

    expect(postComponent).toBeDefined()
  })
})
