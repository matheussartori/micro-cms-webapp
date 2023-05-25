import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/test-utils'

import { Panel } from './'

describe('Panel Component', () => {
  it('should render with correct children', () => {
    render(<Panel>lorem ipsum</Panel>)

    const panelComponent = screen.getByText(/lorem ipsum/i)

    expect(panelComponent).toBeDefined()
  })
})
