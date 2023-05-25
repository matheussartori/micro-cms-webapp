import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/test-utils'

import { TextInput } from './'

describe('TextInput Component', () => {
  it('should render with correct props', () => {
    render(<TextInput value="lorem ipsum" />)

    const textInput = screen.getByDisplayValue(/lorem ipsum/i)

    expect(textInput).toBeDefined()
  })
})
