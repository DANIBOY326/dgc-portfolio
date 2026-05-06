import { useReveal } from '../hooks/useReveal'

const contactLinks = [
  {
    label: 'Email',
    value: 'dgconceptmultimedia@gmail.com',  // ← Replace with your real email
    href: 'mailto:dgconceptmultimedia@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/ojodanielt4991/',  // ← Replace with your real LinkedIn
    href: 'https://www.linkedin.com/in/ojodanielt4991/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

const services = [
  'UI/UX Design',
  'Brand Identity',
  'Ad Creatives',
  'Design Systems',
  'Print Design',
  'Social Media',
]

export default function Contact() {
  const sectionRef = useReveal()

  return (
    <section id="contact" ref={sectionRef} className="section-gap bg-white">
      <div className="section-padding max-w-7xl mx-auto">

        {/* Top CTA banner */}
        <div className="reveal rounded-3xl bg-brand-blue overflow-hidden relative mb-20">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-8 right-1/3 w-3 h-3 rounded-full bg-brand-orange pointer-events-none" />
          <div className="absolute bottom-12 right-1/4 w-2 h-2 rounded-full bg-white/30 pointer-events-none" />

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            <p className="font-display font-semibold text-blue-200 text-sm uppercase tracking-widest mb-4">
              Open for Work
            </p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight mb-6 max-w-3xl mx-auto">
              Let's work together and build something{' '}
              <span className="text-brand-orange">remarkable</span>
            </h2>
            <p className="font-body text-blue-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you're a startup scaling fast, a brand ready for a refresh, or a team that needs a reliable remote design partner - I'm ready to help.
            </p>

            {/* Service chips */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {services.map((s) => (
                <span key={s} className="font-body text-xs text-blue-100 border border-blue-400/40 bg-white/10 px-4 py-1.5 rounded-full">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:dgconceptmultimedia@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-brand-blue font-display font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Send Me a Message
              </a>
              <a
                href="https://www.linkedin.com/in/ojodanielt4991/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/40 font-display font-semibold text-sm px-7 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact cards row */}
        <div className="reveal grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'LinkedIn' ? '_blank' : undefined}
              rel={link.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              className="card case-card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                {link.icon}
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-brand-dark">{link.label}</p>
                <p className="font-body text-xs text-brand-muted mt-0.5 break-words">{link.value}</p>
              </div>
              <svg
                className="ml-auto text-brand-muted group-hover:text-brand-blue transition-colors flex-shrink-0"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
