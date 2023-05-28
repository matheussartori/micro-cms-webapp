import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/libs/test-utils.tsx'

import { Hero } from '@/presentation/components/atoms/Hero'

describe('Hero Component', () => {
  it('should render in the document', () => {
    render(<Hero />)

    const heroComponent = screen.getByTestId('hero')

    expect(heroComponent).toBeDefined()
  })
})
