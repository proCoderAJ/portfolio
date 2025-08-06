import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`

const FloatingShape = styled(motion.div)`
  position: absolute;
  opacity: 0.1;
  
  &.shape-1 {
    background: #FFD700;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  &.shape-2 {
    background: #FF4444;
    width: 60px;
    height: 60px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  
  &.shape-3 {
    background: #4444FF;
    width: 100px;
    height: 40px;
    border-radius: 20px;
  }
  
  &.shape-4 {
    background: #FFD700;
    width: 60px;
    height: 60px;
    transform: rotate(45deg);
  }
`

const BackgroundAnimation = () => {
  const [shapes, setShapes] = useState([])

  useEffect(() => {
    const generateShapes = () => {
      const newShapes = []
      const shapeTypes = ['shape-1', 'shape-2', 'shape-3', 'shape-4', 'shape-1', 'shape-2']
      
      shapeTypes.forEach((type, index) => {
        newShapes.push({
          id: index,
          type,
          top: Math.random() * 100,
          left: Math.random() * 100,
          delay: Math.random() * 20
        })
      })
      
      setShapes(newShapes)
    }

    generateShapes()
    const interval = setInterval(generateShapes, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <BackgroundContainer>
      {shapes.map((shape) => (
        <FloatingShape
          key={shape.id}
          className={shape.type}
          initial={{ 
            top: '100vh', 
            left: `${shape.left}%`,
            rotate: 0 
          }}
          animate={{
            top: '-100px',
            rotate: 360
          }}
          transition={{
            duration: 20,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: `${shape.left}%`
          }}
        />
      ))}
    </BackgroundContainer>
  )
}

export default BackgroundAnimation