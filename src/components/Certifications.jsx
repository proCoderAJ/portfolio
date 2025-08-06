import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  Award, 
  ExternalLink, 
  Shield, 
  BarChart3, 
  Cloud, 
  Code2, 
  Brain,
  Building2,
  Star
} from 'lucide-react'

const CertificationsSection = styled.section`
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

const CertificationsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const CertificationCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

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
    background: ${props => props.gradient || 'linear-gradient(45deg, #FFD700, #FF4444)'};
    border-radius: 20px 20px 0 0;
  }
`

const CertificationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`

const CertificationIcon = styled.div`
  background: ${props => props.bgColor || 'linear-gradient(45deg, #FFD700, #FF4444)'};
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 60px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  svg {
    width: 28px;
    height: 28px;
    color: ${props => props.iconColor || '#000'};
  }
`

const CertificationInfo = styled.div`
  flex: 1;
`

const Issuer = styled.h3`
  color: #FFD700;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`

const CertificationTitle = styled.h4`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
`

const CertificationDescription = styled.p`
  color: #cccccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1rem 0;
`

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
`

const SkillTag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;

  &:hover {
    background: rgba(255, 212, 0, 0.2);
    border-color: #FFD700;
    color: #FFD700;
    transform: scale(1.05);
  }
`

const CertificationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const CertificationDate = styled.div`
  color: #888;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 14px;
    height: 14px;
  }
`

const ViewButton = styled(motion.a)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 212, 0, 0.1), rgba(68, 68, 255, 0.1));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const StatItem = styled(motion.div)`
  text-align: center;
  
  h3 {
    color: #FFD700;
    font-size: 2rem;
    font-weight: 800;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }
  
  p {
    color: #cccccc;
    margin: 0.5rem 0 0 0;
    font-size: 0.9rem;
    font-weight: 500;
  }
`

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const certifications = [
    {
      issuer: "GeeksForGeeks",
      title: "Mastering Data Analytics",
      description: "Comprehensive course covering data analysis techniques, statistical methods, and visualization tools for data-driven decision making.",
      icon: BarChart3,
      bgColor: "linear-gradient(45deg, #00C851, #FFD700)",
      iconColor: "#000",
      gradient: "linear-gradient(45deg, #00C851, #FFD700)",
      skills: ["Data Analysis", "Statistics", "Python", "Visualization"],
      date: "2025",
      url: "https://media.geeksforgeeks.org/courses/certificates/64c978b99ac32a275fb8d27719bc63da.pdf"
    },
    {
      issuer: "Microsoft",
      title: "Microsoft Azure Data Fundamentals",
      description: "Foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.",
      icon: Shield,
      bgColor: "linear-gradient(45deg, #0078D4, #40E0D0)",
      iconColor: "#fff",
      gradient: "linear-gradient(45deg, #0078D4, #40E0D0)",
      skills: ["Azure", "Data Services", "Cloud Data", "SQL"],
      date: "2025",
      url: "https://drive.google.com/file/d/1Cf8PxpIvzTR8Qt3cOG5sUYxbcciru1kz/view?usp=drivesdk"
    },
    {
      issuer: "Microsoft",
      title: "Effective Prompting for Microsoft 365 Copilot",
      description: "Advanced techniques for creating effective prompts and maximizing productivity with Microsoft 365 Copilot AI tools.",
      icon: Brain,
      bgColor: "linear-gradient(45deg, #FF4081, #9C27B0)",
      iconColor: "#fff",
      gradient: "linear-gradient(45deg, #FF4081, #9C27B0)",
      skills: ["AI Prompting", "Microsoft 365", "Productivity", "Copilot"],
      date: "2025",
      url: "https://drive.google.com/file/d/1Cs70eTAim9-lIZOy6Q8bKnuvPMev3X6c/view?usp=drivesdk"
    },
    {
      issuer: "AICTE & MSME",
      title: "Cloud Computing on Google Cloud",
      description: "Comprehensive training on Google Cloud Platform services, deployment strategies, and cloud infrastructure management.",
      icon: Cloud,
      bgColor: "linear-gradient(45deg, #4285F4, #34A853)",
      iconColor: "#fff",
      gradient: "linear-gradient(45deg, #4285F4, #34A853)",
      skills: ["Google Cloud", "Cloud Architecture", "DevOps", "Infrastructure"],
      date: "2024",
      url: "https://drive.google.com/file/d/1eyrepfHT6bpacMiA5MLh4wotSC6yYAMF/view?usp=drivesdk"
    },
    {
      issuer: "DevTown",
      title: "C++ and Data Structures & Algorithms",
      description: "In-depth course covering C++ programming fundamentals and comprehensive data structures and algorithms implementation.",
      icon: Code2,
      bgColor: "linear-gradient(45deg, #FF6B35, #F7931E)",
      iconColor: "#000",
      gradient: "linear-gradient(45deg, #FF6B35, #F7931E)",
      skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      date: "2024",
      url: "https://www.cert.devtown.in/verify/14rQ34"
    }
  ]

  return (
    <CertificationsSection id="certifications">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle variants={itemVariants}>
          Certifications
        </SectionTitle>

        <StatsBar>
          <StatItem variants={itemVariants}>
            <h3>
              <Award />
              5+
            </h3>
            <p>Professional Certifications</p>
          </StatItem>
          <StatItem variants={itemVariants}>
            <h3>
              <Building2 />
              4
            </h3>
            <p>Major Tech Companies</p>
          </StatItem>
          <StatItem variants={itemVariants}>
            <h3>
              <Star />
              100%
            </h3>
            <p>Completion Rate</p>
          </StatItem>
        </StatsBar>

        <CertificationsGrid>
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <CertificationCard
                key={index}
                variants={itemVariants}
                gradient={cert.gradient}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5
                }}
                whileTap={{ scale: 0.98 }}
              >
                <CertificationHeader>
                  <CertificationIcon 
                    bgColor={cert.bgColor}
                    iconColor={cert.iconColor}
                  >
                    <IconComponent />
                  </CertificationIcon>
                  
                  <CertificationInfo>
                    <Issuer>
                      <Building2 />
                      {cert.issuer}
                    </Issuer>
                    <CertificationTitle>{cert.title}</CertificationTitle>
                  </CertificationInfo>
                </CertificationHeader>

                <CertificationDescription>
                  {cert.description}
                </CertificationDescription>

                <SkillTags>
                  {cert.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </SkillTag>
                  ))}
                </SkillTags>

                <CertificationFooter>
                  <CertificationDate>
                    <Award />
                    Certified {cert.date}
                  </CertificationDate>
                  
                  <ViewButton
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink />
                    View Certificate
                  </ViewButton>
                </CertificationFooter>
              </CertificationCard>
            )
          })}
        </CertificationsGrid>
      </motion.div>
    </CertificationsSection>
  )
}

export default Certifications