import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Code2, Database } from 'lucide-react'

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(68, 68, 255, 0.1), transparent);
  overflow: hidden;
`

const HeroContent = styled(motion.div)`
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
`

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textGlow 3s ease-in-out infinite alternate;
  font-weight: 800;
  line-height: 1.2;
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: #cccccc;
  margin-bottom: 2rem;
  font-weight: 400;
  line-height: 1.4;
`

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 15px rgba(255, 212, 0, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const SkillBadges = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

const SkillBadge = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #ffffff;
  
  svg {
    width: 16px;
    height: 16px;
    color: #FFD700;
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #cccccc;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }
`

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: rgba(255, 212, 0, 0.3);
  pointer-events: none;
  
  svg {
    width: 30px;
    height: 30px;
  }
`

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Full Stack Web Developer & Data Analyst'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingIcons = [
    { Icon: Code2, delay: 0, x: '10%', y: '20%' },
    { Icon: Database, delay: 2, x: '85%', y: '30%' },
    { Icon: Sparkles, delay: 4, x: '15%', y: '70%' },
    { Icon: Code2, delay: 6, x: '80%', y: '75%' }
  ]

  return (
    <HeroSection id="home">
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <FloatingIcon
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: 360
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatDelay: 8
          }}
          style={{ left: x, top: y }}
        >
          <Icon />
        </FloatingIcon>
      ))}

      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          Abhishek_Joshi
        </Title>
        
        <Subtitle variants={itemVariants}>
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          >
            |
          </motion.span>
        </Subtitle>

        <SkillBadges variants={itemVariants}>
          <SkillBadge
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 212, 0, 0.2)' }}
          >
            <Code2 />
            React & Node.js
          </SkillBadge>
          <SkillBadge
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 68, 68, 0.2)' }}
          >
            <Database />
            Data Analytics
          </SkillBadge>
          <SkillBadge
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(68, 68, 255, 0.2)' }}
          >
            <Sparkles />
            Problem Solver
          </SkillBadge>
        </SkillBadges>

        <CTAButton
          variants={itemVariants}
          onClick={scrollToAbout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles />
          Explore My Work
        </CTAButton>

        <ScrollIndicator
          variants={itemVariants}
          onClick={scrollToAbout}
          whileHover={{ scale: 1.1 }}
        >
          <span>Scroll to discover</span>
          <ChevronDown />
        </ScrollIndicator>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero