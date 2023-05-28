import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/libs/test-utils.tsx'
import { Text } from '@/presentation/components/atoms/Text/Text'

describe('Text Component', () => {
  it('should render with correct children', () => {
    render(<Text>lorem ipsum</Text>)

    const textComponent = screen.getByText(/lorem ipsum/i)

    expect(textComponent).toBeDefined()
  })
})
