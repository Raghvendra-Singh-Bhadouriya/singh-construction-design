import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { OpenCloseProvider } from './context/opencloseContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <OpenCloseProvider>
      <App />
    </OpenCloseProvider>
  </BrowserRouter>,
)
