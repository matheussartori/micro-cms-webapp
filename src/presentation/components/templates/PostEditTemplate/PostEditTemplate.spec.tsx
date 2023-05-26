import { describe, expect, it, vi } from 'vitest'
import { fireEvent, renderWithBrowserRouter, screen } from '@/tests/test-utils.tsx'

import { PostEditTemplate } from './'

describe('PostEditTemplate Component', () => {
  it('should render correctly with params', () => {
    renderWithBrowserRouter(
      <PostEditTemplate
        id="any"
        content="<p>Test content</p>"
        title="Lorem Ipsum"
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSave={() => {}}
      />
    )

    const postEditTemplateContent = screen.getByDisplayValue(/test content/i)
    const postEditTemplateTitle = screen.getByDisplayValue(/lorem ipsum/i)

    expect(postEditTemplateContent).toBeDefined()
    expect(postEditTemplateTitle).toBeDefined()
  })

  it('should dispatch the on save method correctly', () => {
    const onSaveMock = vi.fn()

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
