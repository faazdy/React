import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './style.css'
//import { App } from './App.jsx'
//import './style.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <App />
)
