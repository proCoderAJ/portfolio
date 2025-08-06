import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  Code,
  ArrowUp
} from 'lucide-react'

const FooterSection = styled.footer`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(26, 26, 46, 0.9));
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #FFD700, #FF4444, #4444FF, #FFD700);
  }
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const FooterColumn = styled(motion.div)`
  h3 {
    color: #FFD700;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

const AboutText = styled.p`
  color: #cccccc;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactItem = styled(motion.a)`
  color: #cccccc;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: #FFD700;
    background: rgba(255, 212, 0, 0.1);
    transform: translateX(5px);
  }

  svg {
    width: 18px;
    height: 18px;
    color: #FFD700;
  }
`

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const QuickLink = styled(motion.a)`
  color: #cccccc;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    color: #FFD700;
    background: rgba(255, 212, 0, 0.1);
    transform: translateX(5px);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: linear-gradient(45deg, rgba(255, 212, 0, 0.2), rgba(68, 68, 255, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.1);
    border-color: #FFD700;
    box-shadow: 0 10px 25px rgba(255, 212, 0, 0.3);
  }

  &:nth-child(1):hover { background: linear-gradient(45deg, #0077b5, #FFD700); }
  &:nth-child(2):hover { background: linear-gradient(45deg, #333, #FFD700); }
  &:nth-child(3):hover { background: linear-gradient(45deg, #FF4444, #FFD700); }
  &:nth-child(4):hover { background: linear-gradient(45deg, #4444FF, #FFD700); }

  svg {
    width: 20px;
    height: 20px;
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Copyright = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: #FF4444;
  }
`

const BackToTop = styled(motion.button)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  border: none;
  border-radius: 12px;
  color: #000;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <FooterSection>
      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FooterGrid>
            <FooterColumn variants={itemVariants}>
              <h3>
                <Code />
                About Abhishek
              </h3>
              <AboutText>
                Passionate Full Stack Developer and Data Analyst dedicated to creating innovative 
                solutions. I love turning complex problems into elegant, user-friendly applications 
                while continuously learning and growing in the tech industry.
              </AboutText>
              <SocialLinks>
                <SocialLink
                  href="https://linkedin.com/in/abhishek-joshi-188010264"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin />
                </SocialLink>
                <SocialLink
                  href="https://github.com/proCoderAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github />
                </SocialLink>
                <SocialLink
                  href="mailto:abhishekjoshi2026@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail />
                </SocialLink>
                <SocialLink
                  href="tel:+917897681083"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone />
                </SocialLink>
              </SocialLinks>
            </FooterColumn>

            <FooterColumn variants={itemVariants}>
              <h3>
                <ArrowUp />
                Quick Links
              </h3>
              <QuickLinks>
                <QuickLink
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('home')
                  }}
                  whileHover={{ x: 5 }}
                >
                  Home
                </QuickLink>
                <QuickLink
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('about')
                  }}
                  whileHover={{ x: 5 }}
                >
                  About Me
                </QuickLink>
                <QuickLink
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('skills')
                  }}
                  whileHover={{ x: 5 }}
                >
                  Skills
                </QuickLink>
                <QuickLink
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('projects')
                  }}
                  whileHover={{ x: 5 }}
                >
                  Projects
                </QuickLink>
                <QuickLink
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('experience')
                  }}
                  whileHover={{ x: 5 }}
                >
                  Experience
                </QuickLink>
                <QuickLink
                  href="#certifications"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('certifications')
                  }}
                  whileHover={{ x: 5 }}
                >
                  Certifications
                </QuickLink>
              </QuickLinks>
            </FooterColumn>

            <FooterColumn variants={itemVariants}>
              <h3>
                <MapPin />
                Contact Info
              </h3>
              <ContactInfo>
                <ContactItem
                  href="mailto:abhishekjoshi2026@gmail.com"
                  whileHover={{ x: 5 }}
                >
                  <Mail />
                  abhishekjoshi2026@gmail.com
                </ContactItem>
                <ContactItem
                  href="tel:+917897681083"
                  whileHover={{ x: 5 }}
                >
                  <Phone />
                  +91 7897681083
                </ContactItem>
                <ContactItem
                  as="div"
                  whileHover={{ x: 5 }}
                >
                  <MapPin />
                  Kanpur, Uttar Pradesh, India
                </ContactItem>
              </ContactInfo>
            </FooterColumn>
          </FooterGrid>

          <FooterBottom>
            <Copyright>
              <Heart />
              © 2025 Abhishek Joshi. Crafted with passion and creativity.
            </Copyright>
            
            <BackToTop
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp />
              Back to Top
            </BackToTop>
          </FooterBottom>
        </motion.div>
      </FooterContent>
    </FooterSection>
  )
}

export default Footer