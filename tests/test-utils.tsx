import { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'
import { PostProvider } from '../src/presentation/context/PostContext'

const Providers = ({ children }: { children: ReactNode }) => (
  <PostProvider>
    {children}
  </PostProvider>
)

const BrowserRouterProviders = ({ children }: { children: ReactNode }) => (
  <Providers>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Providers>
)

export const renderWithBrowserRouter = (ui: ReactElement, options?: RenderOptions) => {
  render(ui, {
    wrapper: BrowserRouterProviders,
    ...options
  })
}

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  render(ui, {
    wrapper: Providers,
    ...options
  })
}

export * from '@testing-library/react'
export { renderWithProviders as render }
