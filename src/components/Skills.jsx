import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  BookOpen, 
  Trophy,
  Cpu,
  Palette,
  BarChart3,
  Shield
} from 'lucide-react'

const SkillsSection = styled.section`
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  border-left: 4px solid;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:nth-child(8n+1) { border-left-color: #FFD700; }
  &:nth-child(8n+2) { border-left-color: #FF4444; }
  &:nth-child(8n+3) { border-left-color: #4444FF; }
  &:nth-child(8n+4) { border-left-color: #00FF88; }
  &:nth-child(8n+5) { border-left-color: #FF6B6B; }
  &:nth-child(8n+6) { border-left-color: #4ECDC4; }
  &:nth-child(8n+7) { border-left-color: #45B7D1; }
  &:nth-child(8n+8) { border-left-color: #96CEB4; }

  &:hover {
    transform: translateY(-10px) translateX(10px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const SkillIcon = styled.div`
  color: ${props => props.color || '#FFD700'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`

const SkillTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`

const SkillContent = styled.div`
  position: relative;
  z-index: 2;
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`

const SkillTag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 212, 0, 0.2);
    border-color: #FFD700;
    color: #FFD700;
    transform: scale(1.05);
  }
`

const SkillDescription = styled.p`
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
  margin: 1rem 0;
`

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillsData = [
    {
      icon: Code,
      title: "Languages",
      description: "Core programming languages for versatile development",
      tags: ["C/C++", "Python", "JavaScript", "TypeScript"],
      color: "#FFD700"
    },
    {
      icon: Globe,
      title: "Frontend",
      description: "Modern frontend technologies for responsive UIs",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js"],
      color: "#FF4444"
    },
    {
      icon: Server,
      title: "Backend",
      description: "Server-side technologies for robust applications",
      tags: ["Node.js", "Express.js", "REST APIs"],
      color: "#4444FF"
    },
    {
      icon: Database,
      title: "Databases",
      description: "Data storage and management solutions",
      tags: ["MySQL", "MongoDB"],
      color: "#00FF88"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud platforms for scalable deployment",
      tags: ["Google Cloud Platform", "Microsoft Azure", "AWS"],
      color: "#FF6B6B"
    },
    {
      icon: Wrench,
      title: "Tools & Analytics",
      description: "Development and analytics tools",
      tags: ["Git", "VS Code", "Tableau", "Power BI", "Docker"],
      color: "#4ECDC4"
    },
    {
      icon: BookOpen,
      title: "Core Concepts",
      description: "Fundamental computer science concepts",
      tags: ["DSA", "OOPs", "Operating Systems", "System Design"],
      color: "#45B7D1"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Programming challenges",
      tags: ["200+ LeetCode", "5⭐ HackerRank in C++, Python, Problem Solving"],
      color: "#96CEB4"
    }
  ]

  return (
    <SkillsSection id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle variants={itemVariants}>
          Technical Skills
        </SectionTitle>

        <SkillsGrid>
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <SkillCard
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.98 }}
              >
                <SkillHeader>
                  <SkillIcon color={skill.color}>
                    <IconComponent />
                  </SkillIcon>
                  <SkillTitle>{skill.title}</SkillTitle>
                </SkillHeader>
                
                <SkillContent>
                  <SkillDescription>{skill.description}</SkillDescription>
                  <SkillTags>
                    {skill.tags.map((tag, tagIndex) => (
                      <SkillTag
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </SkillTag>
                    ))}
                  </SkillTags>
                </SkillContent>
              </SkillCard>
            )
          })}
        </SkillsGrid>
      </motion.div>
    </SkillsSection>
  )
}

export default Skills