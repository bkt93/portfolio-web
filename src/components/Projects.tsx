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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-dark-surface border border-white/30 overflow-hidden hover:border-violet-400/50 transition-colors"
              variants={itemVariants}
            >
              {/* Project image */}
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project info */}
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{project.technologies}</p>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-white/30 text-white hover:bg-white hover:text-dark-bg transition-all text-sm"
                >
                  {t.projects.live}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
