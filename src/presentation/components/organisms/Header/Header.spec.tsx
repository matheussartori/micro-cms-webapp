import { afterAll, describe, expect, it, vi } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { Header } from './'

describe('Header Component', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should render correctly', () => {
    window.scrollTo = vi.fn() as unknown as typeof window.scrollTo

    renderWithBrowserRouter(
      <Header />
    )

    const headerComponent = screen.getByTestId('header')

    expect(headerComponent).toBeDefined()
  })
})
