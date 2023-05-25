import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { PostItem } from './'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

describe('PostItem Component', () => {
  it('should render with correct params', () => {
    renderWithBrowserRouter(
      <PostItem
        id="any_id"
        time="25 May, 2023"
        title="Title"
        shortContent="Short content"
      />
    )

    const postItemByTime = screen.getByText(/25 May, 2023/i)
    const postItemByTitle = screen.getByText(/title/i)
    const postItemByShortContent = screen.getByText(/short content/i)

    expect(postItemByTime).toBeDefined()
    expect(postItemByTitle).toBeDefined()
    expect(postItemByShortContent).toBeDefined()
  })

  it('should redirect to correct post page when click on title', () => {
    const history = createMemoryHistory()

    history.push = vi.fn()

    render(
      <Router location={history.location} navigator={history}>
        <PostItem
          id="any_id"
          time="25 May, 2023"
          title="Title"
          shortContent="Short content"
        />
      </Router>
    )

    const postItem = screen.getByText(/title/i)

    fireEvent.click(postItem)

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
