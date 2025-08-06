import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import GlobalStyles from './styles/GlobalStyles'
import Home from './pages/Home'
import Contact from './pages/Contact'
import BackgroundAnimation from './components/BackgroundAnimation'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <BackgroundAnimation />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Router>
  )
}

export default App