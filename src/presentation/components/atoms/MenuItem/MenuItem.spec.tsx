import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuItem } from './MenuItem.tsx'

describe('MenuItem Component', () => {
  it('should render with correct children', () => {
    render(<MenuItem>lorem ipsum</MenuItem>)

    const textComponent = screen.getByText(/lorem ipsum/i)

    expect(textComponent).toBeDefined()
  })
})
