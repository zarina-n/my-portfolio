import ReactDOM from 'react-dom/client'
import App from './App'
import './main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
