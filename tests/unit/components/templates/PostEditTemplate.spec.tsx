import { Mock, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, renderWithBrowserRouter, screen } from '@/tests/libs/test-utils.tsx'

import { PostEditTemplate } from '@/presentation/components/templates/PostEditTemplate'

describe('PostEditTemplate Component', () => {
  let onSaveMock: Mock

  beforeEach(() => {
    onSaveMock = vi.fn()
  })

  it('should render correctly with params', () => {
    renderWithBrowserRouter(
      <PostEditTemplate
        id="any"
        content="<p>Test content</p>"
        title="Lorem Ipsum"
        onSave={onSaveMock}
      />
    )

    const postEditTemplateContent = screen.getByDisplayValue(/test content/i)
    const postEditTemplateTitle = screen.getByDisplayValue(/lorem ipsum/i)

    expect(postEditTemplateContent).toBeDefined()
    expect(postEditTemplateTitle).toBeDefined()
  })

  it('should dispatch the on save method correctly', () => {
    renderWithBrowserRouter(
      <PostEditTemplate
        id="any"
        content="<p>Test content</p>"
        title="Lorem Ipsum"
        onSave={onSaveMock}
      />
    )

    const buttonSavePost = screen.getByTestId('button-save-post')

    fireEvent.click(buttonSavePost)

    expect(onSaveMock).toHaveBeenCalledWith({
      id: 'any',
      content: '<p>Test content</p>',
      title: 'Lorem Ipsum'
    })
  })
})
