import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

interface Project {
  title: string
  description: string
  technologies: string
  image: string
  link?: string
  github?: string
}

const Projects = () => {
  const { t } = useLanguage()

  const projects: Project[] = [
    {
      title: t.projects.items[0].title,
      description: t.projects.items[0].description,
      technologies: 'React TypeScript Tailwind CSS Node.js',
      image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Proyecto+1',
      link: '#',
      github: '#',
    },
    {
      title: t.projects.items[1].title,
      description: t.projects.items[1].description,
      technologies: 'React Node.js MongoDB Express',
      image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Proyecto+2',
      link: '#',
      github: '#',
    },
    {
      title: t.projects.items[2].title,
      description: t.projects.items[2].description,
      technologies: 'TypeScript Vite Tailwind CSS',
      image: 'https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Proyecto+3',
      link: '#',
      github: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header with decorative line */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-violet-400">{t.projects.title}</h2>
              <div className="h-px bg-white/30 flex-1 max-w-md"></div>
            </div>
            <a href="#" className="text-white hover:text-violet-400 transition-colors">
              {t.projects.viewAll}
            </a>
          </div>
        </motion.div>

        {/* Projects grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            >
              {/* Project image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project info */}
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 -mt-8 mr-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-violet-600/30 hover:bg-violet-500 hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <p className="text-xs font-mono text-violet-400 mb-2 tracking-wide">{project.technologies}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <a href={project.github} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.337-3.369-1.337-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.597 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                  <span className="text-xs text-gray-500 group-hover:text-violet-400 transition-colors">
                    {t.projects.live}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
