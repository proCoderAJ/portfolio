import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  ExternalLink, 
  Github, 
  Heart, 
  Briefcase, 
  Code2, 
  Database,
  Brain,
  Users,
  Shield
} from 'lucide-react'

const ProjectsSection = styled.section`
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

const Timeline = styled(motion.div)`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #FFD700, #FF4444, #4444FF);
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) .timeline-content {
    margin-right: auto;
    margin-left: 0;
    text-align: right;

    @media (max-width: 768px) {
      margin-left: 60px !important;
      margin-right: 0;
      text-align: left !important;
    }
  }

  &:nth-child(even) .timeline-content {
    margin-left: auto;
    margin-right: 0;

    @media (max-width: 768px) {
      margin-left: 60px !important;
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

const TimelineContent = styled(motion.div)`
  width: 45%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }

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

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    width: calc(100% - 80px);
  }
`

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const ProjectIcon = styled.div`
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

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
`

const ProjectDate = styled.p`
  color: #FFD700;
  font-weight: 600;
  margin: 0.5rem 0 1rem 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
  }
`

const ProjectDescription = styled.p`
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const TechTag = styled(motion.span)`
  background: ${props => props.bgColor || 'rgba(255, 212, 0, 0.2)'};
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.borderColor || 'rgba(255, 212, 0, 0.3)'};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: ${props => props.align || 'flex-start'};

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #FF4444, #FFD700);
  color: #000;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 212, 0, 0.4);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(0, 0, 0, 0.8);

  &:nth-child(odd) { 
    background: #FFD700; 
    color: #000;
  }
  &:nth-child(even) { 
    background: #FF4444; 
    color: #fff;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 768px) {
    left: 20px !important;
  }
`

const Projects = () => {
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

  const projects = [
    {
      icon: Heart,
      title: "Heart Disease Prediction Web Application",
      date: "Jan 2025 - Feb 2025",
      description: "A sophisticated web application to predict heart disease risks using machine learning. Built with Python, scikit-learn, and Pandas for the ML model, with an interactive frontend using HTML, CSS, and JavaScript.",
      techStack: [
        { name: "Python", bgColor: "rgba(255, 212, 0, 0.2)", borderColor: "rgba(255, 212, 0, 0.3)" },
        { name: "Machine Learning", bgColor: "rgba(68, 68, 255, 0.2)", borderColor: "rgba(68, 68, 255, 0.3)" },
        { name: "Scikit-learn", bgColor: "rgba(255, 68, 68, 0.2)", borderColor: "rgba(255, 68, 68, 0.3)" },
        { name: "JavaScript", bgColor: "rgba(0, 255, 136, 0.2)", borderColor: "rgba(0, 255, 136, 0.3)" }
      ],
      links: [
        { type: "github", url: "#", label: "View Code" },
        { type: "demo", url: "#", label: "Live Demo" }
      ],
      color: "#FFD700"
    },
    {
      icon: Briefcase,
      title: "Job & Internship Portal",
      date: "Aug 2024 - Nov 2024",
      description: "A dynamic platform connecting job seekers and recruiters. Features include responsive React.js frontend, Node.js backend with MongoDB, job posting capabilities, advanced filtering, and secure user authentication.",
      techStack: [
        { name: "React.js", bgColor: "rgba(255, 212, 0, 0.2)", borderColor: "rgba(255, 212, 0, 0.3)" },
        { name: "Node.js", bgColor: "rgba(68, 68, 255, 0.2)", borderColor: "rgba(68, 68, 255, 0.3)" },
        { name: "MongoDB", bgColor: "rgba(255, 68, 68, 0.2)", borderColor: "rgba(255, 68, 68, 0.3)" },
        { name: "Express.js", bgColor: "rgba(0, 255, 136, 0.2)", borderColor: "rgba(0, 255, 136, 0.3)" }
      ],
      links: [
        { type: "github", url: "#", label: "View Code" },
        { type: "demo", url: "#", label: "Live Demo" }
      ],
      color: "#FF4444"
    }
  ]

  return (
    <ProjectsSection id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle variants={itemVariants}>
          Projects
        </SectionTitle>

        <Timeline>
          {projects.map((project, index) => {
            const IconComponent = project.icon
            const isOdd = index % 2 === 0
            
            return (
              <TimelineItem key={index} variants={itemVariants}>
                <TimelineContent 
                  className="timeline-content"
                  whileHover={{ scale: 1.02 }}
                >
                  <ProjectHeader>
                    <ProjectIcon color={project.color}>
                      <IconComponent />
                    </ProjectIcon>
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </ProjectHeader>
                  
                  <ProjectDate>
                    <Calendar />
                    {project.date}
                  </ProjectDate>
                  
                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>
                  
                  <TechStack>
                    {project.techStack.map((tech, techIndex) => (
                      <TechTag
                        key={techIndex}
                        bgColor={tech.bgColor}
                        borderColor={tech.borderColor}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech.name}
                      </TechTag>
                    ))}
                  </TechStack>
                  
                  <ProjectLinks align={isOdd ? 'flex-end' : 'flex-start'}>
                    {project.links.map((link, linkIndex) => (
                      <ProjectLink
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.type === 'github' ? <Github /> : <ExternalLink />}
                        {link.label}
                      </ProjectLink>
                    ))}
                  </ProjectLinks>
                </TimelineContent>
                
                <TimelineDot>
                  <IconComponent />
                </TimelineDot>
              </TimelineItem>
            )
          })}
        </Timeline>
      </motion.div>
    </ProjectsSection>
  )
}

export default Projects