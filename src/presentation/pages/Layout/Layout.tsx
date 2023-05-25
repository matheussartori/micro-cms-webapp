import { Header } from '@/presentation/components/organisms/Header'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
