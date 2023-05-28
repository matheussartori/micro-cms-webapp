import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/libs/test-utils.tsx'

import { TextInput } from '@/presentation/components/atoms/TextInput'

describe('TextInput Component', () => {
  it('should render with correct props', () => {
    render(<TextInput defaultValue="lorem ipsum" />)

    const textInput = screen.getByDisplayValue(/lorem ipsum/i)

    expect(textInput).toBeDefined()
  })
})
