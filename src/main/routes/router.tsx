import { Home } from '@/presentation/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
