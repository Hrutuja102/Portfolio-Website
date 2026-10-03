import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="pt-24 pb-12 bg-bg-secondary relative overflow-hidden">
      {/* Decorative Wave matches Figma's bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-0 opacity-40">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#9d4edd" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-[0.2em] mb-3 block">
              Get In Touch
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's <span className="text-accent">Connect</span>
            </h2>
            
            <p className="text-white/70 leading-relaxed mb-10 max-w-[480px]">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's create something amazing together.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <a href="mailto:hrutujahpatil102@gmail.com" className="flex items-center gap-5 group w-fit">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-card border border-border-subtle rounded-xl text-accent text-xl group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm">
                  <FiMail />
                </div>
                <div>
                  <span className="text-[0.75rem] text-white/50 uppercase tracking-wider block mb-0.5">Email</span>
                  <span className="text-[0.95rem] font-medium text-white/90 group-hover:text-accent transition-colors">hrutujahpatil102@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918767081982" className="flex items-center gap-5 group w-fit">
                <div className="w-12 h-12 flex items-center justify-center bg-surface-card border border-border-subtle rounded-xl text-accent text-xl group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm">
                  <FiPhone />
                </div>
                <div>
                  <span className="text-[0.75rem] text-white/50 uppercase tracking-wider block mb-0.5">Phone</span>
                  <span className="text-[0.95rem] font-medium text-white/90 group-hover:text-accent transition-colors">+91 8767081982</span>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/hrutuja-patil-404a17331" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-surface-card border border-border-subtle rounded-xl text-white/70 text-xl hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-surface-card border border-border-subtle rounded-xl text-white/70 text-xl hover:bg-[#333] hover:text-white hover:border-[#333] hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <FiGithub />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-surface-card/80 backdrop-blur-md border border-border-subtle rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          >
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name" className="text-sm font-semibold text-white/80 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-bg-primary/50 border border-border-subtle rounded-lg px-4 py-3.5 text-[0.95rem] text-white outline-none focus:border-accent focus:bg-accent/5 focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="text-sm font-semibold text-white/80 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-bg-primary/50 border border-border-subtle rounded-lg px-4 py-3.5 text-[0.95rem] text-white outline-none focus:border-accent focus:bg-accent/5 focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-white/80 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-bg-primary/50 border border-border-subtle rounded-lg px-4 py-3.5 text-[0.95rem] text-white outline-none focus:border-accent focus:bg-accent/5 focus:ring-2 focus:ring-accent/20 transition-all resize-y min-h-[120px]"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-accent text-white font-semibold rounded-lg shadow-[0_4px_15px_rgba(157,78,221,0.3)] hover:bg-accent-light hover:shadow-[0_6px_20px_rgba(157,78,221,0.4)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
