import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Projects from './components/Projects'
import Services from './components/Services'
import Stacks from './components/Stacks'

export default function App() {

  return (
    <>
      <div className="min-h-screen font-sans text-[#18181B] scroll-smooth">


        <Navbar />
        <Hero id="hero" />
        <About id="about" />
        <Stacks id="skills" />
        <Projects id="projects" />
        <Services id="services" />
        <Contact id="contact" />
        <Footer />
      
      </div>
    </>
  )
}

