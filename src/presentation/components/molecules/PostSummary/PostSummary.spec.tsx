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
        time="25 May, 2023"
        title="Title"
        content="Short content"
      />
    )

    const postSummaryByTime = screen.getByText(/25 May, 2023/i)
    const postSummaryByTitle = screen.getByText(/title/i)
    const postSummaryByShortContent = screen.getByText(/short content/i)

    expect(postSummaryByTime).toBeDefined()
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
          time="25 May, 2023"
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
