import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/libs/test-utils.tsx'

import { SearchBar } from '@/presentation/components/molecules/SearchBar'

describe('SearchBar Component', () => {
  it('should render correctly', () => {
    renderWithBrowserRouter(
      <SearchBar />
    )

    const searchBarComponent = screen.getByTestId('searchbar')

    expect(searchBarComponent).toBeDefined()
  })
})
