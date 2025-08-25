import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'
import Contact from './pages/Contact'
import BackgroundAnimation from './components/BackgroundAnimation'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <div style={{ minHeight: '100vh', background: '#1a1a2e', color: 'white' }}>
        <BackgroundAnimation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '20px',
                textAlign: 'center'
              }}>
                <h1>Page Not Found</h1>
              </div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App