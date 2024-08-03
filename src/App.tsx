import Presentation from "./components/Presentation"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import About from "./components/AboutMe"
import SectorSelection from "./components/SectorSelection"


function App() {

  return (
    <main>
      <Navbar />
      <Presentation />
      <SectorSelection />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

export default App
