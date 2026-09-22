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

      {/* <Navbar />
    
      <div className="min-h-screen bg-white p-10 text-gray-900 dark:bg-gray-950 dark:text-white">
          <h1 className="text-4xl font-bold">
              Dark Mode Test
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
              If this text changes when dark mode is enabled, it's working.
          </p>
      </div> */}
    

      <div className="min-h-screen font-sans text-[#18181B] scroll-smooth transition-colors duration-300 dark:bg-gray-950 dark:text-white">


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

