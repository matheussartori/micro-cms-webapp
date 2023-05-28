import { describe, expect, it, vi } from 'vitest'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { fireEvent, render, renderWithBrowserRouter, screen } from '@/tests/libs/test-utils.tsx'
import { MenuItem } from '@/presentation/components/atoms/MenuItem/MenuItem'

describe('MenuItem Component', () => {
  it('should render with correct children', () => {
    renderWithBrowserRouter(<MenuItem to="/">lorem ipsum</MenuItem>)

    const textComponent = screen.getByText(/lorem ipsum/i)

    expect(textComponent).toBeDefined()
  })

  it('should redirect to correct page', () => {
    const history = createMemoryHistory()

    history.push = vi.fn()

    render(
      <Router location={history.location} navigator={history}>
        <MenuItem to="/about">About</MenuItem>
      </Router>
    )

    const menuItem = screen.getByText(/about/i)

    fireEvent.click(menuItem)

    expect(history.push).toHaveBeenCalledWith({
      hash: '',
      pathname: '/about',
      search: ''
    }, undefined, {
      preventScrollReset: undefined,
      relative: undefined,
      replace: false,
      state: undefined
    })
  })
})
