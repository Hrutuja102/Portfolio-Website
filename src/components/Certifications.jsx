import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiUdemy } from 'react-icons/si'
import { FaCertificate } from 'react-icons/fa'

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certs = [
    {
      provider: 'Udemy',
      icon: <SiUdemy />,
      courses: [
        'The Complete Python Bootcamp',
        'C++ Masterclass',
        'ChatGPT & Prompt Engineering',
        'Full MERN Stack'
      ]
    },
    {
      provider: 'SkillUp',
      icon: <FaCertificate />,
      courses: [
        'Introduction to Generative AI'
      ]
    },
    {
      provider: 'Infosys SpringBoard',
      icon: <FaCertificate />,
      courses: [
        'Introduction to OpenAI GPT Models'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="py-24 bg-bg-secondary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3 block">
            Continuous Learning
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Licenses & <span className="text-accent">Certifications</span>
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-surface-card border border-border-subtle rounded-2xl p-8 relative overflow-hidden group hover:border-border-accent hover:shadow-[0_0_30px_rgba(157,78,221,0.15)] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/15 rounded-xl text-accent text-2xl">
                  {cert.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                  {cert.provider}
                </h3>
              </div>

              <ul className="space-y-4">
                {cert.courses.map((course, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-[0.95rem] text-white/80 leading-relaxed font-medium">
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
