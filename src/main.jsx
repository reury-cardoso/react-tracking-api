import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/header.jsx'
import MainSection from './components/mainSection/mainSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainSection />
  </StrictMode>,
)
