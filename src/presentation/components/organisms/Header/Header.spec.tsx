import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { Header } from './'

describe('Header Component', () => {
  it('should render correctly', () => {
    renderWithBrowserRouter(
      <Header />
    )

    const headerComponent = screen.getByTestId('header')

    expect(headerComponent).toBeDefined()
  })
})
