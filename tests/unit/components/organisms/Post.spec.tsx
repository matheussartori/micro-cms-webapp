import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/libs/test-utils.tsx'

import { Post } from '@/presentation/components/organisms/Post/Post'

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
