import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #FF4444, #4444FF);
  transform-origin: 0%;
  z-index: 9999;
  border-radius: 0 0 2px 2px;
`

const ScrollProgress = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      setScrollYProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <ProgressBar
      style={{ scaleX: scrollYProgress }}
      initial={{ scaleX: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  )
}

export default ScrollProgress