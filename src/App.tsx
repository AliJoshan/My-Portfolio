import './App.css'
import AboutSection from './components/AboutSection'
import BlogsSection from './components/BlogsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
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
      <BlogsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
