import './App.css'
import AboutSection from './components/AboutSection'
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
    </>
  )
}

export default App
