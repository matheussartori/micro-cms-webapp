import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/test-utils'

import { Logo } from './'

describe('Logo Component', () => {
  it('should render in the document', () => {
    render(<Logo />)

    const logoComponent = screen.getByTestId('logo')

    expect(logoComponent).toBeDefined()
  })
})
