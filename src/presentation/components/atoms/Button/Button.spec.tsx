import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@/tests/test-utils'

import { Button } from './'

describe('Button Component', () => {
  it('should render with correct children', () => {
    render(<Button>lorem ipsum</Button>)

    const buttonComponent = screen.getByText(/lorem ipsum/i)

    expect(buttonComponent).toBeDefined()
  })

  it('should fire the onClick event when the button is clicked', () => {
    const onClickMock = vi.fn()

    render(<Button onClick={onClickMock}>lorem ipsum</Button>)

    const buttonComponent = screen.getByText(/lorem ipsum/i)

    fireEvent.click(buttonComponent)

    expect(onClickMock).toHaveBeenCalledOnce()
  })
})
