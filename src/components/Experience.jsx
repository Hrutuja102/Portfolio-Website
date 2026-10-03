import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      role: 'Frontend AI Engineer Intern',
      company: 'FlyRank',
      date: 'Jul 2026 -- Present',
      type: 'experience',
      bullets: [
        'Developing responsive, AI-powered frontend interfaces using modern web technologies to enhance user experience.',
        'Integrating AI-driven features by collaborating with backend services and APIs to deliver scalable solutions.',
        'Building reusable UI components, optimizing performance, and ensuring responsive cross-platform compatibility.'
      ]
    },
    {
      role: 'Full Stack Web Development Intern',
      company: 'My Job Grow',
      date: 'May 2026 -- Jun 2026',
      type: 'experience',
      bullets: [
        'Built responsive and scalable web applications, strengthening practical knowledge of frontend and backend development through hands-on implementations.'
      ]
    },
    {
      role: 'B.E., Computer Science Engineering',
      company: 'K. K. Wagh Institute of Engineering Education & Research, Nashik',
      date: '2024 -- Present',
      type: 'education',
      bullets: [
        'Pursuing Bachelor of Engineering in Computer Science.',
        'HSC (Class XII): 80.33% (Matoshri Junior College, 2024)',
        'SSC (Class X): 89.00% (Nashik Cambridge School, 2022)'
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-bg-secondary relative">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3 block">
            My Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Experience & <span className="text-accent">Education</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent to-border-subtle rounded-full md:left-1/2 md:-ml-[1px]" />

          {experiences.map((item, index) => {
            const isEven = index % 2 === 0
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative pl-12 mb-12 last:mb-0 md:pl-0 md:flex ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-bg-secondary border-4 border-accent flex items-center justify-center shadow-[0_0_0_4px_rgba(58,24,80,1)] z-10 md:left-1/2 md:-ml-4">
                  {item.type === 'experience' ? (
                    <FaBriefcase className="text-accent text-[10px]" />
                  ) : (
                    <FaGraduationCap className="text-accent text-[10px]" />
                  )}
                </div>

                {/* Content Area */}
                <div className={`md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-surface-card border border-border-subtle rounded-2xl p-6 md:p-8 hover:border-border-accent hover:shadow-[0_0_30px_rgba(157,78,221,0.15)] transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col mb-4">
                      <span className="text-xs font-semibold text-white/50 py-1 px-3 bg-accent/10 rounded-full w-fit mb-3">
                        {item.date}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <h4 className="text-accent font-medium text-sm">
                        {item.company}
                      </h4>
                    </div>
                    
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="text-[0.9rem] text-white/70 leading-relaxed pl-5 relative">
                          <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
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
