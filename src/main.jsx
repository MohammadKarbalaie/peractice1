import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/header/Navbar.jsx'
import Hero from './components/header/home/Hero-Section.jsx'
import Client from './components/header/home/client.jsx'
import Community from './components/header/home/Community.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <Client/>
    <Community/>
    <App />
  </StrictMode>,
)
