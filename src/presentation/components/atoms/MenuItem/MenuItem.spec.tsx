import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/test-utils'
import { MenuItem } from './MenuItem.tsx'

describe('MenuItem Component', () => {
  it('should render with correct children', () => {
    render(<MenuItem to="/">lorem ipsum</MenuItem>)

    const textComponent = screen.getByText(/lorem ipsum/i)

    expect(textComponent).toBeDefined()
  })
})
