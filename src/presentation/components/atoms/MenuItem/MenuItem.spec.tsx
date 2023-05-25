import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, renderWithBrowserRouter, screen } from '@/tests/test-utils'
import { createMemoryHistory } from 'history'

import { MenuItem } from './MenuItem.tsx'
import { Router } from 'react-router-dom'

describe('MenuItem Component', () => {
  it('should render with correct children', () => {
    renderWithBrowserRouter(<MenuItem to="/">lorem ipsum</MenuItem>)

    const textComponent = screen.getByText(/lorem ipsum/i)

    expect(textComponent).toBeDefined()
  })

  it('should redirect to a page', () => {
    const history = createMemoryHistory()

    history.push = vi.fn()

    render(
      <Router location={history.location} navigator={history}>
        <MenuItem to="/about">About</MenuItem>
      </Router>
    )

    const menuItem = screen.getByText(/about/i)

    fireEvent.click(menuItem)

    expect(history.push).toHaveBeenCalled()
  })
})
