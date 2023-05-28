import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/libs/test-utils.tsx'

import { ContactTemplate } from '@/presentation/components/templates/ContactTemplate'

describe('ContactTemplate Component', () => {
  it('should render the children correctly', () => {
    renderWithBrowserRouter(
      <ContactTemplate
        imageUrl='any_url'
      >
        Lorem Ipsum
      </ContactTemplate>
    )

    const children = screen.getByText(/lorem ipsum/i)

    expect(children).toBeDefined()
  })

  it('should render the contact image', () => {
    renderWithBrowserRouter(
      <ContactTemplate
        imageUrl='any_url'
      >
        Lorem Ipsum
      </ContactTemplate>
    )

    const imgComponent = screen.getByRole('img') as HTMLImageElement

    expect(imgComponent.src).toContain('any_url')
  })
})
