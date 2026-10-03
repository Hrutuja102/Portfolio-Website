import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaUsers, FaLaptopCode, FaHandsHelping } from 'react-icons/fa'

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const items = [
    {
      title: 'Hackathon Finalist',
      icon: <FaTrophy />,
      desc: 'INOVERA Hackathon, PVG College Web Development Hackathon, and Nirman Hackathon.'
    },
    {
      title: 'GSSoC 2026 Contributor',
      icon: <FaLaptopCode />,
      desc: 'Contributed to open-source software projects and collaborative development.'
    },
    {
      title: 'Leadership Roles',
      icon: <FaUsers />,
      desc: 'Team Lead for Seva Setu project; Core Committee Member of CSI KKWIEER; Active Member of TEDx KKWIEER Curation Team and College Fusion Club.'
    },
    {
      title: 'Active Participation',
      icon: <FaHandsHelping />,
      desc: 'AI Agentic Hackathon (Unstop), GDG MET Nashik Git/GitHub Workshop, Campus-to-Corporate Program.'
    }
  ]

  return (
    <section className="py-24 bg-bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3 block">
            Milestones
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Achievements & <span className="text-accent">Leadership</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col sm:flex-row items-start gap-6 bg-surface-card border border-border-subtle rounded-2xl p-6 lg:p-8 hover:bg-surface-card-hover hover:border-border-accent hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent/15 rounded-xl text-accent text-2xl shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-[0.95rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
