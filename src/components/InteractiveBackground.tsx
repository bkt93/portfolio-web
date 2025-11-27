import { useRef } from 'react'

interface InteractiveBackgroundProps {
  mousePosition: { x: number; y: number }
}

const InteractiveBackground = ({ mousePosition }: InteractiveBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-0 pointer-events-none"
      style={{ background: '#0a0a0f' }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Smooth gradient orb that follows mouse - DARKER */}
      <div
        className="absolute"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          filter: 'blur(60px)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'none',
          zIndex: -1,
        }}
      />

      {/* Secondary subtle orb - DARKER */}
      <div
        className="absolute"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 60%)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          filter: 'blur(80px)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'none',
          zIndex: -1,
          mixBlendMode: 'screen',
        }}
      />
    </div>
  )
}

export default InteractiveBackground
