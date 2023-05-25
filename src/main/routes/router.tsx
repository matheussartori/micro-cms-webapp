import { About } from '@/presentation/pages/About'
import { Blog, BlogPost, BlogPostEdit } from '@/presentation/pages/Blog'
import { Contact } from '@/presentation/pages/Contact'
import { Home } from '@/presentation/pages/Home'
import { Layout } from '@/presentation/pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/read/:postId" element={<BlogPost />} />
          <Route path="/blog/edit/:postId" element={<BlogPostEdit />} />
          <Route path="/blog/create" element={<BlogPostEdit />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
