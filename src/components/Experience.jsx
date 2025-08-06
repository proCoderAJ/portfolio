import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  MapPin, 
  Calendar, 
  CheckCircle,
  Server,
  Cog,
  Zap,
  Building2
} from 'lucide-react'

const ExperienceSection = styled.section`
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

const ExperienceCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  margin: 2rem auto;
  max-width: 800px;

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

  &:hover {
    transform: translateY(-10px);
    border-color: #FFD700;
    box-shadow: 0 25px 50px rgba(255, 212, 0, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
    border-radius: 25px 25px 0 0;
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const CompanyIcon = styled.div`
  background: linear-gradient(45deg, #FFD700, #FF4444);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  height: 80px;
  box-shadow: 0 10px 30px rgba(255, 212, 0, 0.3);

  svg {
    width: 40px;
    height: 40px;
    color: #000;
  }
`

const ExperienceInfo = styled.div`
  flex: 1;
`

const JobTitle = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
`

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.25rem;
  }
`

const CompanyName = styled.p`
  color: #FFD700;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`

const DateLocation = styled.div`
  display: flex;
  gap: 2rem;
  color: #cccccc;
  font-size: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: #FF4444;
  }
`

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: #4444FF;
  }
`

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
`

const ResponsibilityItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 3px solid #FFD700;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }
`

const CheckIcon = styled.div`
  color: #00FF88;
  margin-top: 0.2rem;
  min-width: 20px;

  svg {
    width: 20px;
    height: 20px;
  }
`

const ResponsibilityText = styled.p`
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`

const SkillsHighlight = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const SkillsTitle = styled.h4`
  color: #FFD700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`

const SkillItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 212, 0, 0.1);
    border-color: #FFD700;
    transform: scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
    color: #FFD700;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 500;
  }
`

const Experience = () => {
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

  const responsibilities = [
    "Worked with Google Cloud services including Compute Engine, Cloud Storage, and App Engine",
    "Collaborated with senior developers to automate infrastructure tasks using Infrastructure-as-Code (IaC)",
    "Enhanced deployment efficiency and scalability using cloud-native tools on Google Cloud Platform"
  ]

  const skills = [
    { icon: Cloud, name: "Google Cloud Platform" },
    { icon: Server, name: "Compute Engine" },
    { icon: Cog, name: "Infrastructure as Code" },
    { icon: Zap, name: "Cloud Automation" }
  ]

  return (
    <ExperienceSection id="experience">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionTitle variants={itemVariants}>
          Experience
        </SectionTitle>

        <ExperienceCard
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <ExperienceHeader>
            <CompanyIcon>
              <Cloud />
            </CompanyIcon>
            
            <ExperienceInfo>
              <JobTitle>Cloud Computing Intern</JobTitle>
              
              <CompanyDetails>
                <CompanyName>
                  <Building2 />
                  Innovate Intern - Tamil Nadu
                </CompanyName>
                
                <DateLocation>
                  <DateInfo>
                    <Calendar />
                    June 2024 – Oct 2024
                  </DateInfo>
                  <LocationInfo>
                    <MapPin />
                    Tamil Nadu, India
                  </LocationInfo>
                </DateLocation>
              </CompanyDetails>
            </ExperienceInfo>
          </ExperienceHeader>

          <ResponsibilitiesList>
            {responsibilities.map((responsibility, index) => (
              <ResponsibilityItem
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <CheckIcon>
                  <CheckCircle />
                </CheckIcon>
                <ResponsibilityText>{responsibility}</ResponsibilityText>
              </ResponsibilityItem>
            ))}
          </ResponsibilitiesList>

          <SkillsHighlight>
            <SkillsTitle>
              <Zap />
              Key Technologies & Skills
            </SkillsTitle>
            
            <SkillsGrid>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <SkillItem
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent />
                    <p>{skill.name}</p>
                  </SkillItem>
                )
              })}
            </SkillsGrid>
          </SkillsHighlight>
        </ExperienceCard>
      </motion.div>
    </ExperienceSection>
  )
}

export default Experience