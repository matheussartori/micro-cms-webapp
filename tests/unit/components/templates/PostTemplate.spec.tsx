import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/libs/test-utils.tsx'

import { PostTemplate } from '@/presentation/components/templates/PostTemplate'

describe('PostTemplate Component', () => {
  it('should render correctly', () => {
    renderWithBrowserRouter(
      <PostTemplate
        id="any"
        content="<p>Test content</p>"
        time={Date.now()}
        title="Lorem Ipsum"
      />
    )

    const postTemplateComponent = screen.getByText(/test content/i)

    expect(postTemplateComponent).toBeDefined()
  })
})
