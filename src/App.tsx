import { useState, useEffect } from 'react'
import InteractiveBackground from './components/InteractiveBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <InteractiveBackground mousePosition={mousePosition} />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App

