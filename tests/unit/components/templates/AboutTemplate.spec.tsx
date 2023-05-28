import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/libs/test-utils.tsx'

import { AboutTemplate } from '@/presentation/components/templates/AboutTemplate'
import { Tech } from '@/presentation/components/templates/AboutTemplate/AboutTemplate'

const techs: Tech[] = [
  {
    externalUrl: 'first_url',
    image: 'first_img'
  },
  {
    externalUrl: 'second_url',
    image: 'second_img'
  }
]

describe('AboutTemplate Component', () => {
  it('should render the children correctly', () => {
    renderWithBrowserRouter(
      <AboutTemplate techs={techs}>
        Lorem Ipsum
      </AboutTemplate>
    )

    const children = screen.getByText(/lorem ipsum/i)

    expect(children).toBeDefined()
  })

  it('should render the techs correctly', () => {
    renderWithBrowserRouter(
      <AboutTemplate techs={techs}>
        Lorem Ipsum
      </AboutTemplate>
    )

    const techElements = screen.getAllByTestId('panel-icon')

    expect(techElements.length).toBe(2)
  })
})
