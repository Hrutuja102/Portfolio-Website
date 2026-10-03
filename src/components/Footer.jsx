export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-bg-tertiary pt-16 pb-8 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        <a href="#home" className="font-heading text-2xl font-bold tracking-tight mb-8">
          Hrutuja<span className="text-accent">.</span>
        </a>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          <a href="#home" className="text-sm font-medium text-white/60 hover:text-accent transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-white/60 hover:text-accent transition-colors">About</a>
          <a href="#skills" className="text-sm font-medium text-white/60 hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="text-sm font-medium text-white/60 hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-white/60 hover:text-accent transition-colors">Contact</a>
        </div>
        
        <div className="w-full max-w-[600px] h-[1px] bg-border-subtle mb-8" />
        
        <p className="text-[0.8rem] text-white/40 text-center">
          &copy; {currentYear} Hrutuja H. Patil. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
