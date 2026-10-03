import { useState, useEffect } from 'react'
import { FiChevronUp } from 'react-icons/fi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-accent text-white rounded-xl shadow-[0_4px_15px_rgba(157,78,221,0.4)] hover:bg-accent-light hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(157,78,221,0.5)] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
      }`}
      aria-label="Back to top"
    >
      <FiChevronUp className="text-2xl" />
    </button>
  )
}
