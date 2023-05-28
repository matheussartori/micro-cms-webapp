import { describe, expect, it } from 'vitest'
import { render, screen } from '@/tests/libs/test-utils.tsx'

import { Panel } from '@/presentation/components/atoms/Panel'

describe('Panel Component', () => {
  it('should render with correct children', () => {
    render(<Panel>lorem ipsum</Panel>)

    const panelComponent = screen.getByText(/lorem ipsum/i)

    expect(panelComponent).toBeDefined()
  })
})
