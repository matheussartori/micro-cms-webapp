import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { BlogTemplate } from './'

describe('BlogTemplate Component', () => {
  it('should render blog posts correctly', () => {
    renderWithBrowserRouter(
      <BlogTemplate posts={[
        {
          id: 'first',
          title: 'first title',
          content: 'first_short_content',
          time: Date.now()
        },
        {
          id: 'second',
          title: 'second title',
          content: 'second_short_content',
          time: Date.now()
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

  it('should render large blog posts with sliced content', () => {
    renderWithBrowserRouter(
      <BlogTemplate posts={[
        {
          id: 'first',
          title: 'first title',
          content: 'very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content_very_large_content',
          time: Date.now()
        }
      ]} />
    )

    const blogPostTextContent = screen.getByTestId('blog-post-item-content').textContent
    const blogPostItems = screen.getAllByTestId('blog-post-item')

    const hasSlicedNeedle = new RegExp(/.../, 'g')

    expect(blogPostTextContent?.match(hasSlicedNeedle)).toBeTruthy()
    expect(blogPostTextContent?.length).toBe(300 + 3) // 300 is the slice limit + needle
    expect(blogPostItems).toHaveLength(1)
  })
})
