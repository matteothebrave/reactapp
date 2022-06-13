import React from 'react'
import ReactDOM from 'react-dom/client'
// Importing Global CSS which make all styles default (Margin/ Fonts)
import './styles/global.css';
// Importing all Home from Folder Pages and Home
import { Home } from './pages/Home'

// Importing the DOM from DIV on index.html (reactapp folder)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
