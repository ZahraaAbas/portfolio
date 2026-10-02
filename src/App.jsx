import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './sections/Hero/Hero.jsx'
import About from './sections/About/About.jsx'
import Projects from './sections/Projects/Projects.jsx'
import Contact from './sections/Contact/Contact.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App