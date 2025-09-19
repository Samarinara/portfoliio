import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import TopBar from './TopBar.jsx'
import BottomBar from './bottom-bar.jsx'
import UnderConstruction from './UnderConstruction.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TopBar></TopBar>
        <Routes>
          <Route path='/home' element={<App />} />
          <Route path='/under-construction' element={<UnderConstruction />} />
          <Route path='*' element={<Navigate to='/home' />} />

        </Routes>
      <BottomBar></BottomBar>
    </BrowserRouter>
  </StrictMode>,
)
