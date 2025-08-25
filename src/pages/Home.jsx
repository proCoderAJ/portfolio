import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'

const Home = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#1a1a2e',
        color: 'white'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Footer />
    </motion.div>
  )
}

export default Home