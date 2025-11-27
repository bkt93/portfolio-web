import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolling, setIsScrolling] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Don't update active section while programmatically scrolling
      if (!isScrolling) {
        // Update active section based on scroll position
        const sections = ['hero', 'about', 'projects', 'contact']
        const current = sections.find((section) => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        if (current) setActiveSection(current)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolling])

  const scrollToSection = (id: string) => {
    // Set scrolling flag to prevent active section updates during scroll
    setIsScrolling(true)
    setActiveSection(id) // Set immediately for visual feedback

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })

      // Clear scrolling flag after scroll animation completes
      setTimeout(() => {
        setIsScrolling(false)
      }, 1000) // Wait for smooth scroll to complete
    }
  }

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/5 backdrop-blur-md py-4 shadow-2xl shadow-violet-900/10'
          : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="text-xl font-mono font-bold text-gray-300 hover:text-white cursor-pointer transition-colors"
          onClick={() => scrollToSection('hero')}
        >
          &lt;/bkt93&gt;
        </div>

        <div className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-300
                  ${isActive
                    ? 'text-violet-400 bg-white/5'
                    : 'text-gray-400 hover:text-gray-200'
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-400 rounded-full" />
                )}
              </a>
            )
          })}

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/50 transition-all"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/50 transition-all"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <button className="w-10 h-10 flex items-center justify-center glass rounded-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
