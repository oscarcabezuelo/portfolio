import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

  return (
    <main className="text-emerald-400 bg-emerald-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
