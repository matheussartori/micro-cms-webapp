import { Header } from '@/presentation/components/molecules/Header'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
