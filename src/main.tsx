import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import App from './App.tsx'
import './index.css'

// Apply dark class to html element for consistent dark theme
document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <ToastProvider />
        <App />
      </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
