import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaReact, FaNodeJs, FaDatabase, FaBrain, FaTools } from 'react-icons/fa'
import { SiJavascript, SiPython, SiCplusplus, SiHtml5, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub } from 'react-icons/si'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Web Development',
      icon: <FaReact />,
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'Express.js']
    },
    {
      title: 'AI & Data Science',
      icon: <FaBrain />,
      skills: ['Generative AI', 'Prompt Engineering', 'GPT Models', 'Machine Learning', 'Scikit-learn']
    },
    {
      title: 'Databases & Tools',
      icon: <FaDatabase />,
      skills: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'MATLAB', 'VS Code']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-24 bg-bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3 block">
            What I Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-white/60 max-w-[600px] mx-auto">
            A comprehensive overview of my technical expertise, programming languages, and tools.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillGroups.map((group, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-surface-card border border-border-subtle rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-border-accent hover:shadow-[0_0_30px_rgba(157,78,221,0.2)] relative overflow-hidden group"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent/15 rounded-2xl text-accent text-3xl">
                  {group.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold mb-4 text-white">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {group.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium px-3 py-1.5 bg-accent/10 border border-border-subtle rounded-full text-white/80 group-hover:bg-accent/20 group-hover:border-border-accent transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
