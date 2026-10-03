import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiAward } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 bg-bg-secondary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3 block">
            Discover
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-accent">me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo side - Left */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)] z-2">
              <div className="absolute inset-0 border-2 border-accent/50 rounded-2xl z-2 pointer-events-none" />
              <img
                src="/profile.jpg"
                alt="Hrutuja Patil"
                className="w-full h-[500px] object-cover object-top hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            
            {/* Background offset shape */}
            <div className="absolute top-6 left-6 w-full h-full bg-accent/15 rounded-2xl z-1" />
          </motion.div>

          {/* Content side - Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-4">
              I develop impactful digital solutions.
            </h3>
            
            <p className="text-white/80 leading-relaxed mb-8 text-[0.95rem]">
              I am a motivated and detail-oriented engineering student with strong analytical, 
              teamwork, and leadership skills. I am currently pursuing my B.E. in Computer Science 
              Engineering at K. K. Wagh Institute of Engineering Education & Research, Nashik. 
              My passion lies in Full Stack Development and AI integration.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-surface-card rounded-xl border border-border-subtle hover:bg-surface-card-hover hover:border-border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/15 rounded-lg text-accent text-xl shrink-0">
                  <FiCode />
                </div>
                <div>
                  <span className="text-[0.75rem] text-white/50 uppercase tracking-wider block">Role</span>
                  <span className="text-sm font-semibold">Full Stack Developer</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-surface-card rounded-xl border border-border-subtle hover:bg-surface-card-hover hover:border-border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/15 rounded-lg text-accent text-xl shrink-0">
                  <FaGraduationCap />
                </div>
                <div>
                  <span className="text-[0.75rem] text-white/50 uppercase tracking-wider block">Education</span>
                  <span className="text-sm font-semibold">B.E. Computer Science</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-surface-card rounded-xl border border-border-subtle hover:bg-surface-card-hover hover:border-border-accent transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/15 rounded-lg text-accent text-xl shrink-0">
                  <FiAward />
                </div>
                <div>
                  <span className="text-[0.75rem] text-white/50 uppercase tracking-wider block">Experience</span>
                  <span className="text-sm font-semibold">Frontend AI Intern</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold text-sm 
                rounded-lg shadow-[0_4px_15px_rgba(157,78,221,0.4)] hover:bg-accent-light hover:-translate-y-0.5
                hover:shadow-[0_6px_25px_rgba(157,78,221,0.5)] transition-all duration-400"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
