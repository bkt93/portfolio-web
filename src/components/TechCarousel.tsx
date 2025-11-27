import { useState, useRef, useEffect } from 'react'
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si'

interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

const TechCarousel = () => {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const technologies: TechItem[] = [
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ]

  // Duplicate array multiple times for seamless loop
  const duplicatedTechs = [...technologies, ...technologies, ...technologies]

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = isPaused ? 'paused' : 'running'
    }
  }, [isPaused])

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient overlays for fade effect */}

      <div
        ref={carouselRef}
        className="flex gap-10 animate-scroll"
        style={{
          width: 'fit-content',
        }}
      >
        {duplicatedTechs.map((tech, index) => {
          const Icon = tech.icon
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-4 group"
            >
              <div
                className="relative w-24 h-24 rounded-lg glass flex items-center justify-center 
                         transition-all duration-300 group-hover:scale-105"
              >
                <Icon
                  className="w-12 h-12 transition-colors duration-300"
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechCarousel
