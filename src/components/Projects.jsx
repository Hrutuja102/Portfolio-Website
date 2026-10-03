import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const projects = [
    {
      name: 'AlgoNova',
      tagline: 'Advanced Algorithmic & Interview Preparation Platform',
      tech: ['React', 'Node.js', 'MongoDB', 'Monaco Editor'],
      image: '/project-algonova.jpg',
      bullets: [
        'Engineered a full-stack platform featuring interactive DSA visualizers and a real-time coding environment.',
        'Integrated an AI-driven interview simulator with voice analysis, real-time code evaluation, and a System Design workspace.',
        'Designed a scalable backend with gamification (streaks, badges, leaderboards) and anti-cheat integrity scoring.'
      ]
    },
    {
      name: 'Authentify',
      tagline: 'AI Powered Certificate Verification Platform',
      tech: ['OCR', 'Blockchain', 'AI', 'React'],
      image: '/project-authentify.jpg',
      bullets: [
        'Developed a secure credential verification platform utilizing OCR-based document processing to combat academic fraud.',
        'Leveraged blockchain concepts to ensure tamper-resistant credential validation.',
        'Hackathon Finalist project recognized for innovation and security.'
      ]
    },
    {
      name: 'Seva Setu',
      tagline: 'NGO Platform for Transparency & Access',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: '/project-sevasetu.jpg',
      bullets: [
        'Developed a web platform to enhance transparency and streamline communication between NGOs, donors, and beneficiaries.',
        'Led frontend development and UI design, focusing on accessibility, usability, and efficient information management.'
      ]
    },
    {
      name: 'Guess The Number',
      tagline: 'Interactive Web-Based Game',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: null, // We'll use a placeholder or stylized block if no image
      bullets: [
        'Developed an interactive browser game with random number generation, input validation, and real-time score tracking.'
      ]
    }
  ]

  return (
    <section id="projects" className="py-24 bg-bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20" ref={ref}>
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3 block">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 !== 0
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative rounded-2xl overflow-hidden border border-border-subtle shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full aspect-[16/10] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full aspect-[16/10] bg-surface-card flex items-center justify-center">
                        <span className="font-heading text-4xl font-bold text-white/20">{project.name}</span>
                      </div>
                    )}
                  </div>
                  {/* Decorative backdrop */}
                  <div className={`absolute top-4 -z-10 w-full h-full bg-surface-card rounded-2xl border border-border-subtle ${isEven ? '-left-4' : '-right-4'}`} />
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i}
                        className="text-[0.75rem] font-semibold tracking-wide px-3 py-1.5 bg-accent/10 border border-border-subtle rounded-full text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-heading text-3xl font-bold mb-2 text-white group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-accent-light font-medium text-sm mb-6">
                    {project.tagline}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-[0.95rem] text-white/70 leading-relaxed pl-6 relative">
                        <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-accent/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a 
                      href="#" 
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-surface-card border border-border-accent rounded-lg text-sm font-semibold text-white/90 hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(157,78,221,0.4)] transition-all duration-300 w-fit"
                    >
                      View Project <FiExternalLink />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
