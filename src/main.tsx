import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './pages/MainPage'
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
    <Analytics />
  </StrictMode>,
)
