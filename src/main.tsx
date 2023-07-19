import React from 'react'
import ReactDOM from 'react-dom/client'
import './stylesheets/index.css'
import './assets/fonts/Poppins/typography.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
