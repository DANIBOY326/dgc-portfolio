import { useState, useEffect } from 'react'
import logo from '../assets/dgc-logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'What I Do', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-brand-border' : 'bg-transparent'
      }`}
    >
      <div className="section-padding max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo area — swap <img> src when logo is uploaded */}
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="DGConcept Multimedia & Prints"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link font-body text-sm font-medium transition-colors duration-200 ${
              scrolled ? 'text-white hover:text-gray-300' : 'text-gray-400 hover:text-white'
}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-[#FF6600] hover:bg-[#e65c00] text-white text-xs px-5 py-2.5 rounded-lg font-semibold transition-all">
            Let's Work Together
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-white hover:text-gray-300 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs px-5 py-2.5 self-start mt-2" onClick={() => setMenuOpen(false)}>
            Let's Work Together
          </a>
        </nav>
      </div>
    </header>
  )
}
