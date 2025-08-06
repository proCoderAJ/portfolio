import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Zap
} from 'lucide-react'
import BackgroundAnimation from '../components/BackgroundAnimation'

const ContactPage = styled(motion.div)`
  min-height: 100vh;
  padding-top: 100px;
`

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(15px);
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #FFD700, #FF4444);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const BackButton = styled(Link)`
  background: linear-gradient(45deg, #4444FF, #FFD700);
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(68, 68, 255, 0.3);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const ContactHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 4rem);
  background: linear-gradient(45deg, #FFD700, #FF4444, #4444FF);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  animation: textGlow 3s ease-in-out infinite alternate;
  font-weight: 800;
`

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #cccccc;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled.div`
  display: grid;
  gap: 2rem;
`

const InfoCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
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
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: #FFD700;
    box-shadow: 0 25px 50px rgba(255, 212, 0, 0.2);
  }

  &:hover::before {
    left: 100%;
  }
`

const InfoIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  color: ${props => props.color || '#FFD700'};

  svg {
    width: 48px;
    height: 48px;
  }
`

const InfoTitle = styled.h3`
  color: #FFD700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`

const InfoText = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`

const InfoLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 600;

  &:hover {
    color: #FFD700;
  }
`

const ContactForm = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 212, 0, 0.1), rgba(255, 68, 68, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 212, 0, 0.05), transparent);
    animation: rotate 20s linear infinite;
  }
`

const FormTitle = styled.h2`
  color: #FFD700;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 800;
  position: relative;
  z-index: 2;
`

const Form = styled.form`
  position: relative;
  z-index: 2;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  margin-bottom: 2rem;
`

const Label = styled.label`
  display: block;
  color: #FFD700;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 20px rgba(255, 212, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 20px rgba(255, 212, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a1a2e;
    color: #ffffff;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 20px rgba(255, 212, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #888;
  }
`

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 212, 0, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const ResponseMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.success {
    background: linear-gradient(45deg, rgba(0, 255, 136, 0.2), rgba(68, 68, 255, 0.2));
    border: 1px solid #00FF88;
    color: #00FF88;
  }

  &.error {
    background: linear-gradient(45deg, rgba(255, 68, 68, 0.2), rgba(255, 212, 0, 0.2));
    border: 1px solid #FF4444;
    color: #FF4444;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

const SocialSection = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(68, 68, 255, 0.2), rgba(255, 68, 68, 0.2));
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const SocialTitle = styled.h3`
  color: #FFD700;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`

const SocialLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, rgba(255, 212, 0, 0.2), rgba(68, 68, 255, 0.2));
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.1);
    border-color: #FFD700;
    box-shadow: 0 15px 30px rgba(255, 212, 0, 0.3);
  }

  &:nth-child(1):hover { background: linear-gradient(45deg, #0077b5, #FFD700); }
  &:nth-child(2):hover { background: linear-gradient(45deg, #333, #FFD700); }
  &:nth-child(3):hover { background: linear-gradient(45deg, #FF4444, #FFD700); }
  &:nth-child(4):hover { background: linear-gradient(45deg, #4444FF, #FFD700); }

  svg {
    width: 32px;
    height: 32px;
  }
`

const UrgentContactSection = styled.div`
  text-align: center;
  margin: 4rem 0;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(255, 68, 68, 0.15), rgba(255, 212, 0, 0.15));
  border: 2px solid rgba(255, 68, 68, 0.3);
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 68, 68, 0.1), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
  }

  &::after {
    content: '🚨';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1.5rem;
    border: 2px solid #FF4444;
  }
`

const UrgentTitle = styled.h3`
  color: #FF4444;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;

  svg {
    width: 24px;
    height: 24px;
    color: #FFD700;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`

const UrgentText = styled.p`
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`

const UrgentActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
`

const UrgentButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(255, 68, 68, 0.4);
  }

  &.whatsapp {
    background: linear-gradient(45deg, #25D366, #FFD700);
    
    &:hover {
      box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
    }
  }

  &.email {
    background: linear-gradient(45deg, #4444FF, #FFD700);
    
    &:hover {
      box-shadow: 0 15px 35px rgba(68, 68, 255, 0.4);
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState({ text: '', type: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const { firstName, lastName, email, subject, message } = formData
    
    if (!firstName || !lastName || !email || !subject || !message) {
      return 'Please fill in all required fields.'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.'
    }
    
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationError = validateForm()
    if (validationError) {
      setResponseMessage({ text: validationError, type: 'error' })
      return
    }
    
    setIsSubmitting(true)
    setResponseMessage({ text: '', type: '' })
    
    try {
      // Formspree submission (AJAX)
      const response = await fetch('https://formspree.io/f/xpwlyrpq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitting(false)
        setResponseMessage({ 
          text: "🎉 Thank you for your message! I'll get back to you within 24 hours.", 
          type: 'success' 
        })
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        // Hide message after 5 seconds
        setTimeout(() => {
          setResponseMessage({ text: '', type: '' })
        }, 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setIsSubmitting(false)
      // Fallback: Open email client with pre-filled message
      const emailSubject = encodeURIComponent(`${formData.subject} - Message from ${formData.firstName} ${formData.lastName}`)
      const emailBody = encodeURIComponent(
        `Hi Abhishek,\n\n${formData.message}\n\nBest regards,\n${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}`
      )
      const mailtoLink = `mailto:abhishekjoshi2026@gmail.com?subject=${emailSubject}&body=${emailBody}`
      setResponseMessage({ 
        text: "❌ Form submission failed. Opening your email client as backup...", 
        type: 'error' 
      })
      setTimeout(() => {
        window.open(mailtoLink, '_blank')
        setResponseMessage({ 
          text: "📧 Email client opened! Please send the pre-filled message or try the form again.", 
          type: 'error' 
        })
      }, 1500)
      setTimeout(() => {
        setResponseMessage({ text: '', type: '' })
      }, 8000)
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      text: "Feel free to send me an email anytime!",
      link: "mailto:abhishekjoshi2026@gmail.com",
      linkText: "abhishekjoshi2026@gmail.com",
      color: "#FFD700"
    },
    {
      icon: Phone,
      title: "Phone Number",
      text: "Available for calls and WhatsApp messages",
      link: "tel:+917897681083",
      linkText: "+91 7897681083",
      color: "#FF4444"
    },
    {
      icon: MapPin,
      title: "Location",
      text: "Based in Kanpur, Uttar Pradesh, India",
      linkText: "Open to remote opportunities worldwide",
      color: "#4444FF"
    },
    {
      icon: Clock,
      title: "Response Time",
      text: "I typically respond within 24 hours",
      linkText: "Best time to reach: 9 AM - 8 PM IST",
      color: "#00FF88"
    }
  ]

  return (
    <ContactPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundAnimation />
      
      <Navigation>
        <NavContainer>
          <Logo
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            AJ
          </Logo>
          <BackButton to="/">
            <ArrowLeft />
            Back to Portfolio
          </BackButton>
        </NavContainer>
      </Navigation>

      <MainContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactHeader variants={itemVariants}>
            <Title>Let&apos;s Connect!</Title>
            <Subtitle>
              Ready to collaborate on exciting projects? Have a question about my work? Or just want to say hello? 
              I&apos;d love to hear from you! Drop me a message below or reach out through any of my social channels.
            </Subtitle>
          </ContactHeader>

          <ContactGrid>
            <motion.div variants={itemVariants}>
              <ContactInfo>
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <InfoCard
                      key={index}
                      whileHover={{ scale: 1.02 }}
                    >
                      <InfoIcon color={info.color}>
                        <IconComponent />
                      </InfoIcon>
                      <InfoTitle>{info.title}</InfoTitle>
                      <InfoText>{info.text}</InfoText>
                      {info.link ? (
                        <InfoLink href={info.link}>{info.linkText}</InfoLink>
                      ) : (
                        <InfoText style={{ color: '#ffffff', fontWeight: 600 }}>
                          {info.linkText}
                        </InfoText>
                      )}
                    </InfoCard>
                  )
                })}
              </ContactInfo>
            </motion.div>

            <ContactForm variants={itemVariants}>
              <FormTitle>Send Me a Message</FormTitle>
              <Form 
                onSubmit={handleSubmit}
                // action and method removed, React handles submission
              >
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormRow>
                  <FormGroup>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="project">Project Collaboration</option>
                      <option value="job">Job Opportunity</option>
                      <option value="freelance">Freelance Work</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="general">General Inquiry</option>
                    </Select>
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project, opportunity, or just say hello!"
                    required
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send />
                      Send Message
                    </>
                  )}
                </SubmitButton>

                {responseMessage.text && (
                  <ResponseMessage
                    className={responseMessage.type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {responseMessage.type === 'success' ? <CheckCircle /> : <AlertCircle />}
                    {responseMessage.text}
                  </ResponseMessage>
                )}
              </Form>
            </ContactForm>
          </ContactGrid>

          {/* Urgent Contact Section */}
          <motion.div variants={itemVariants}>
            <UrgentContactSection>
              <UrgentTitle>
                <Zap />
                Need Urgent Response?
              </UrgentTitle>
              <UrgentText>
                For time-sensitive projects or urgent queries, reach out directly via phone or WhatsApp for immediate assistance.
              </UrgentText>
              <UrgentActions>
                <UrgentButton
                  href="tel:+917897681083"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone />
                  Call Now
                </UrgentButton>
                <UrgentButton
                  href="https://wa.me/917897681083?text=Hi%20Abhishek%2C%20I%20have%20an%20urgent%20query%20regarding..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📱
                  WhatsApp
                </UrgentButton>
                <UrgentButton
                  href="mailto:abhishekjoshi2026@gmail.com?subject=URGENT:%20&body=Hi%20Abhishek%2C%0A%0AThis%20is%20urgent.%20"
                  className="email"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail />
                  Urgent Email
                </UrgentButton>
              </UrgentActions>
            </UrgentContactSection>
          </motion.div>

          <SocialSection variants={itemVariants}>
            <SocialTitle>Connect With Me</SocialTitle>
            <SocialLinks>
              <SocialLink
                href="https://linkedin.com/in/abhishek-joshi-188010264"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin />
              </SocialLink>
              <SocialLink
                href="https://github.com/proCoderAJ"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github />
              </SocialLink>
              <SocialLink
                href="mailto:abhishekjoshi2026@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail />
              </SocialLink>
              <SocialLink
                href="tel:+917897681083"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Phone />
              </SocialLink>
            </SocialLinks>
          </SocialSection>
        </motion.div>
      </MainContent>
    </ContactPage>
  )
}

export default Contact