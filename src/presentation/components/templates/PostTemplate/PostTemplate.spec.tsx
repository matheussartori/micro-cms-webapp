import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils.tsx'

import { PostTemplate } from './'

describe('PostTemplate Component', () => {
  it('should render correctly', () => {
    renderWithBrowserRouter(
      <PostTemplate
        id="any"
        content="<p>Test content</p>"
        time="May 25, 2023"
        title="Lorem Ipsum"
      />
    )

    const postTemplateComponent = screen.getByText(/test content/i)

    expect(postTemplateComponent).toBeDefined()
  })
})
