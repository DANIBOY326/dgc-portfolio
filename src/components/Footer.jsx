import logo from '../assets/dgc-logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="section-padding max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src={logo}
              alt="DGConcept Multimedia & Prints"
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
            />
          </a>

          {/* Tagline */}
          <p className="font-body text-sm text-gray-400 text-center">
            <span className="text-brand-orange font-medium">...bringing your visual dreams to life.</span>
          </p>

          {/* Copyright */}
          <p className="font-body text-xs text-gray-500">
            © {year} DGConcept Multimedia & Prints. All rights reserved.
          </p>

        </div>

        {/* Nav links */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6">
          {['What I Do', 'Case Studies', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="font-body text-xs text-gray-500 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
