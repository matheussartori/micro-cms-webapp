import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/libs/test-utils.tsx'

import { TextArea } from '@/presentation/components/atoms/TextArea'

describe('TextArea Component', () => {
  it('should render with correct props', () => {
    render(<TextArea defaultValue="lorem ipsum" />)

    const textAreaComponent = screen.getByDisplayValue(/lorem ipsum/i)

    expect(textAreaComponent).toBeDefined()
  })
})
