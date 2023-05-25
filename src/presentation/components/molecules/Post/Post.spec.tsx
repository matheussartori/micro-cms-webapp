import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/test-utils'
import { Post } from './Post'

describe('Post Component', () => {
  it('should render with correct props', () => {
    render(
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
