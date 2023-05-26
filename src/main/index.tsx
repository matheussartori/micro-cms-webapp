import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from '@/main/routes/router'
import { globalStyles } from '@/presentation/styles/global'
import { PostProvider } from '@/presentation/context/PostContext'

globalStyles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PostProvider>
      <Router />
    </PostProvider>
  </React.StrictMode>
)
