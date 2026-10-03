import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400
          ${scrolled
            ? 'bg-bg-primary/95 backdrop-blur-xl py-3 shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="font-heading text-2xl font-bold tracking-tight"
          >
            Hrutuja<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                className={`relative text-sm font-medium tracking-wide py-1 transition-colors duration-300
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-accent
                  after:rounded-full after:transition-all after:duration-400
                  ${activeSection === item.href.slice(1)
                    ? 'text-accent after:w-full'
                    : 'text-white/80 hover:text-accent after:w-0 hover:after:w-full'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-2xl p-1 z-[1001]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-bg-primary z-[999] flex flex-col items-center justify-center gap-8
          transition-all duration-400 md:hidden
          ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        {navItems.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
            className="font-heading text-3xl font-semibold text-white/80 hover:text-accent transition-colors duration-300"
            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
