import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { PanelIcon } from './'

describe('PanelIcon Component', () => {
  it('should render with correct params', () => {
    renderWithBrowserRouter(
      <PanelIcon
        externalUrl="any_url"
        src="any_src"
      />
    )

    const panelIconComponent = screen.getByTestId('panel-icon')

    expect(panelIconComponent).toBeDefined()
    expect(panelIconComponent.innerHTML).toContain('any_src')
  })

  it('should redirect to correct external url', () => {
    renderWithBrowserRouter(
      <PanelIcon
        externalUrl="any_url"
        src="any_src"
      />
    )

    const panelIconComponent = screen.getByTestId('panel-icon').closest('a')

    expect(panelIconComponent?.href).toContain('any_url')
    expect(panelIconComponent?.target).toBe('_blank')
  })
})
