import { describe, expect, it } from 'vitest'
import { renderWithBrowserRouter, screen } from '@/tests/test-utils'

import { AboutTemplate } from './'
import { Tech } from './AboutTemplate'

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
  it('should the children correctly', () => {
    renderWithBrowserRouter(
      <AboutTemplate techs={techs}>
        Lorem Ipsum
      </AboutTemplate>
    )

    const children = screen.getByText(/lorem ipsum/i)

    expect(children).toBeDefined()
  })

  it('should the techs correctly', () => {
    renderWithBrowserRouter(
      <AboutTemplate techs={techs}>
        Lorem Ipsum
      </AboutTemplate>
    )

    const techElements = screen.getAllByTestId('panel-icon')

    expect(techElements.length).toBe(2)
  })
})
