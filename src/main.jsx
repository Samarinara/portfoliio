import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import TopBar from './TopBar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TopBar></TopBar>
        <Routes>
          <Route path='/' element={<App />} />

        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
