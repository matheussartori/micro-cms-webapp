import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@/tests/libs/test-utils.tsx'

import { Button } from '@/presentation/components/atoms/Button'

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
