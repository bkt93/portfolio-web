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
            <div className="absolute inset-0 border border-white/20 rounded-lg transform rotate-3 scale-105 opacity-50"></div>
            <div className="absolute inset-0 border border-violet-500/20 rounded-lg transform -rotate-3 scale-105 opacity-50"></div>

            {/* Profile Image Container with Float Animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative bg-dark-surface/80 backdrop-blur-sm border border-white/30 rounded-lg p-2 aspect-square flex items-center justify-center overflow-hidden shadow-2xl shadow-violet-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent pointer-events-none"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            {/* Status indicator */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 bg-dark-surface/90 backdrop-blur-md border border-white/20 px-4 py-3 rounded-lg shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                </span>
                <span className="text-xs font-medium text-white">{t.hero.status}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
