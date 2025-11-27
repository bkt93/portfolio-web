import { motion } from 'framer-motion'
import TechCarousel from './TechCarousel'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Update this path to your CV file
    link.download = 'CV-Desarrollador.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-violet-400">{t.about.title}</h2>
            <div className="h-px bg-white/30 flex-1 max-w-md"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{t.about.greeting}</h3>

            <p className="text-gray-400 mb-4 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.about.p2}
            </p>

            <button
              onClick={handleDownloadCV}
              className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-dark-bg transition-all duration-300 mr-4"
            >
              {t.about.downloadCv}
            </button>
          </motion.div>

          {/* Right side - Illustration/Visual - MEDIUM SIZE with scroll animation */}
          <motion.div
            className="relative max-w-sm mx-auto"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="bg-dark-surface border border-white/30 rounded-lg p-10 aspect-square flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-lg mb-2">🎨</p>
                <p className="text-sm">{t.about.illustration}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-violet-400">{t.about.skillsTitle}</h2>
            <div className="h-px bg-white/30 flex-1 max-w-md"></div>
          </div>

          <div className="py-8">
            <TechCarousel />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
