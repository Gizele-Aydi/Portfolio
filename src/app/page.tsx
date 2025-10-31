import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
