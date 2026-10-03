import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/5 -top-[100px] -right-[100px]" />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-accent/5 -bottom-[50px] -left-[80px]" />
        <div className="absolute w-[150px] h-[150px] rounded-full bg-accent/[0.03] top-[40%] left-[30%]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-2 w-full">
        {/* Text Content */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-sm font-medium text-white/50 tracking-[0.2em] uppercase mb-3 block">
            Hello, my name is
          </span>

          <h1 className="font-heading text-[clamp(2.5rem,5vw,3.8rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">
            Hrutuja <span className="text-accent">H. Patil</span>
          </h1>

          <p className="text-lg text-white/80 font-normal mb-5 leading-relaxed max-w-[520px] mx-auto md:mx-0">
            Full Stack &amp; AI Developer | Aspiring Software Engineer
          </p>

          <p className="text-[0.95rem] text-white/55 leading-[1.8] mb-9 max-w-[480px] mx-auto md:mx-0">
            Motivated engineering student passionate about building impactful digital solutions 
            with web development, AI integration, and collaborative technical projects.
          </p>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold text-sm 
                rounded-lg shadow-[0_4px_15px_rgba(157,78,221,0.4)] hover:bg-accent-light hover:-translate-y-0.5
                hover:shadow-[0_6px_25px_rgba(157,78,221,0.5)] transition-all duration-400"
            >
              View Projects <FiArrowRight className="text-base" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-accent font-semibold text-sm 
                rounded-lg border-2 border-accent hover:bg-accent/10 hover:-translate-y-0.5
                hover:border-accent-light transition-all duration-400"
            >
              Contact Me <FiDownload className="text-base" />
            </a>
          </div>
        </motion.div>

        {/* Image with accent wave (Figma pattern) */}
        <motion.div
          className="order-1 md:order-2 flex justify-center items-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] md:w-[380px] md:h-[440px]">
            {/* Main photo */}
            <img
              src="/profile.jpg"
              alt="Hrutuja H. Patil"
              className="w-full h-full object-cover object-top rounded-3xl relative z-2 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            />

            {/* Accent wave blob behind photo (mimics the Figma yellow blob) */}
            <svg
              className="absolute -bottom-8 -right-10 w-[260px] h-[260px] z-1"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#9d4edd"
                d="M45.3,-62.5C57.4,-52.8,65.1,-37.5,70.3,-21.4C75.6,-5.3,78.4,11.6,73.2,25.5C68,39.4,54.8,50.3,40.7,58.2C26.6,66.2,11.5,71.2,-4.1,76.2C-19.7,81.3,-35.9,86.3,-47.2,78.8C-58.5,71.3,-64.8,51.3,-69.5,33.1C-74.2,14.9,-77.3,-1.5,-72.8,-15.4C-68.3,-29.3,-56.2,-40.7,-43,-51.2C-29.8,-61.7,-15.5,-71.2,0.8,-72.3C17.2,-73.3,33.2,-72.2,45.3,-62.5Z"
                transform="translate(100 100)"
                opacity="0.25"
              />
            </svg>

            {/* Floating dots */}
            <div
              className="absolute top-[10%] -right-5 w-3 h-3 bg-accent rounded-full z-3"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            />
            <div
              className="absolute bottom-[20%] -left-4 w-2 h-2 bg-accent/60 rounded-full z-3"
              style={{ animation: 'float 3s ease-in-out infinite 1s' }}
            />
            <div
              className="absolute top-[30%] -left-8 w-1.5 h-1.5 bg-accent/40 rounded-full z-3"
              style={{ animation: 'float 3s ease-in-out infinite 2s' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
