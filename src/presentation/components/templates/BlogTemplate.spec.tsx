import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { BlogTemplate } from './'

describe('BlogTemplate Component', () => {
  it('should render correctly', () => {
    renderWithBrowserRouter(
      <BlogTemplate posts={[
        {
          id: 'first',
          title: 'first title',
          shortContent: 'first_short_content',
          time: 'first_short_content'
        },
        {
          id: 'second',
          title: 'second title',
          shortContent: 'second_short_content',
          time: 'second_short_content'
        }
      ]} />
    )

    const firstBlogPostItem = screen.getByText(/first title/i)
    const secondBlogPostItem = screen.getByText(/second title/i)
    const blogPostItems = screen.getAllByTestId('blog-post-item')

    expect(firstBlogPostItem).toBeDefined()
    expect(secondBlogPostItem).toBeDefined()
    expect(blogPostItems).toHaveLength(2)
  })
})
