import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import profileImage from '../assets/profile.png'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block mb-2">{t.hero.greeting}</span>
              <span className="text-gradient">{t.hero.role1}</span>
              <span className="block">{t.hero.role2}</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.a
              href="#projects"
              className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-dark-bg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t.hero.cta}
            </motion.a>
          </motion.div>

          {/* Right side - Decorative/Visual element - MEDIUM SIZE */}
          <motion.div
            className="relative max-w-md mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative geometric lines */}
            <div className="absolute inset-0 border border-white/20 rounded-lg">
              <div className="absolute -top-4 -right-4 w-full h-full border border-white/10 rounded-lg"></div>
              <div className="absolute -top-8 -right-8 w-full h-full border border-white/5 rounded-lg"></div>
            </div>

            {/* Profile Image */}
            <div className="relative bg-dark-surface border border-white/30 rounded-lg p-2 aspect-square flex items-center justify-center overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Status indicator */}
            <div className="absolute -bottom-4 left-4 bg-dark-surface border border-white/30 px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-xs text-white">{t.hero.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
