import './App.css'
import AboutSection from './components/AboutSection'
import BlogPostPage from './components/BlogPostPage'
import BlogsSection from './components/BlogsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <BlogsSection />
              <ContactSection />
            </>
          }
        />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App
