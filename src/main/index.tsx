import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from '@/main/routes/router'
import { globalStyles } from '@/presentation/styles/global'

globalStyles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
