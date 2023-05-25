import { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'

const Providers = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
)

export const renderWithBrowserRouter = (ui: ReactElement, options?: RenderOptions) => {
  render(ui, {
    wrapper: Providers,
    ...options
  })
}

export * from '@testing-library/react'
