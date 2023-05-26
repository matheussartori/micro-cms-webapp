import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { HomeTemplate } from './'

describe('HomeTemplate Component', () => {
  it('should render with correct articles', () => {
    renderWithBrowserRouter(
      <HomeTemplate
        heroImg='any_url'
        firstArticle='lorem ipsum'
        secondArticle='dolor sit amet'
      />
    )

    const firstArticleComponent = screen.getByText(/lorem ipsum/i)
    const secondArticleComponent = screen.getByText(/dolor sit amet/i)

    expect(firstArticleComponent).toBeDefined()
    expect(secondArticleComponent).toBeDefined()
  })

  it('should render with correct hero image', () => {
    renderWithBrowserRouter(
      <HomeTemplate
        heroImg='any_url'
        firstArticle='lorem ipsum'
        secondArticle='dolor sit amet'
      />
    )

    const heroComponent = screen.getByRole('img') as HTMLImageElement

    expect(heroComponent.src).toContain('any_url')
  })
})
