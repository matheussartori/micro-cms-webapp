import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { SearchBar } from './'

describe('SearchBar Component', () => {
  it('should render correctly', () => {
    renderWithBrowserRouter(
      <SearchBar />
    )

    const searchBarComponent = screen.getByTestId('searchbar')

    expect(searchBarComponent).toBeDefined()
  })
})
