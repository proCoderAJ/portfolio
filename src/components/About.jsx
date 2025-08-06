import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Trophy } from 'lucide-react'

const AboutSection = styled.section`
  padding: 100px 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #FFD700, #4444FF);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`

const AboutContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const AboutText = styled(motion.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 212, 0, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: center;
    color: #e0e0e0;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }
`

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #FFD700;
    box-shadow: 0 15px 30px rgba(255, 212, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
  }
`

const StatIcon = styled.div`
  color: #FFD700;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  svg {
    width: 32px;
    height: 32px;
  }
`

const StatValue = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-weight: 700;
`

const StatLabel = styled.p`
  color: #cccccc;
  font-size: 0.9rem;
  margin: 0;
`

const HighlightBox = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 212, 0, 0.1), rgba(68, 68, 255, 0.1));
  border: 1px solid rgba(255, 212, 0, 0.3);
  border-radius: 15px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  position: relative;

  p {
    margin: 0;
    font-size: 1rem;
    color: #FFD700;
    font-weight: 600;
  }

  &::before {
    content: '⭐';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1.2rem;
  }
`

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const stats = [
    {
      icon: GraduationCap,
      value: "8.21/10.0",
      label: "CGPA"
    },
    {
      icon: MapPin,
      value: "Kanpur, UP",
      label: "Location"
    },
    {
      icon: Calendar,
      value: "2022-2026",
      label: "BTech CSE"
    },
    {
      icon: Trophy,
      value: "5⭐ & 200+",
      label: "HackerRank & LeetCode"
    }
  ]

  return (
    <AboutSection id="about">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionTitle variants={itemVariants}>
          About Me
        </SectionTitle>

        <AboutContent>
          <AboutText
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <p>
              I am a passionate Full Stack Web Developer and Data Analyst with a solid foundation in modern technologies. 
              Currently pursuing BTech in Computer Science from Maharana Pratap Engineering College with a CGPA of 8.21/10.0.
            </p>
            <p>
              I love building visually appealing and efficient websites while conducting thorough data analyses. 
              My expertise spans across multiple programming languages and frameworks, with a strong focus on creating 
              innovative solutions that make a difference.
            </p>
            
            <HighlightBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <p>
                "Passionate about turning complex problems into elegant solutions through code and data insights"
              </p>
            </HighlightBox>
          </AboutText>

          <StatsGrid variants={itemVariants}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <StatCard
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StatIcon>
                    <IconComponent />
                  </StatIcon>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              )
            })}
          </StatsGrid>
        </AboutContent>
      </motion.div>
    </AboutSection>
  )
}

export default About