import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/test-utils'

import { SearchBar } from './'

describe('SearchBar Component', () => {
  it('should render correctly', () => {
    render(
      <SearchBar />
    )

    const searchBarComponent = screen.getByTestId('searchbar')

    expect(searchBarComponent).toBeDefined()
  })
})
