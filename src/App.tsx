import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default App
