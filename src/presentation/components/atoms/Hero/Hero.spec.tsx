import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/test-utils'

import { Hero } from './'

describe('Hero Component', () => {
  it('should render in the document', () => {
    render(<Hero />)

    const heroComponent = screen.getByTestId('hero')

    expect(heroComponent).toBeDefined()
  })
})
