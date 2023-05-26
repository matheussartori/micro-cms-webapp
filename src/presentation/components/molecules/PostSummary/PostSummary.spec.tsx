import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { PostSummary } from './'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('PostSummary Component', () => {
  it('should render with correct params', () => {
    renderWithBrowserRouter(
      <PostSummary
        id="any_id"
        time={Date.now()}
        title="Title"
        content="Short content"
      />
    )

    const postSummaryByTitle = screen.getByText(/title/i)
    const postSummaryByShortContent = screen.getByText(/short content/i)

    expect(postSummaryByTitle).toBeDefined()
    expect(postSummaryByShortContent).toBeDefined()
  })

  it('should redirect to correct post page when click on title', () => {
    const history = createMemoryHistory()

    history.push = vi.fn()

    render(
      <Router location={history.location} navigator={history}>
        <PostSummary
          id="any_id"
          time={Date.now()}
          title="Title"
          content="Short content"
        />
      </Router>
    )

    const postSummary = screen.getByText(/title/i)

    fireEvent.click(postSummary)

    expect(history.push).toHaveBeenCalledWith({
      hash: '',
      pathname: '/blog/read/any_id',
      search: ''
    }, undefined, {
      preventScrollReset: undefined,
      relative: undefined,
      replace: false,
      state: undefined
    })
  })
})
