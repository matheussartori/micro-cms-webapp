import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/libs/test-utils.tsx'

import { Logo } from '@/presentation/components/atoms/Logo'

describe('Logo Component', () => {
  it('should render in the document', () => {
    render(<Logo />)

    const logoComponent = screen.getByTestId('logo')

    expect(logoComponent).toBeDefined()
  })
})
