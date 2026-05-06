import { useEffect, useRef } from 'react'

const stats = [
  { value: '350+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
]

const badges = [
  'UI/UX Design',
  'Brand Identity',
  'Ad Creatives',
  'Social Media Visuals',
  'Design Systems',
  'Remote-Ready',
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.querySelectorAll('.hero-reveal').forEach((node, i) => {
      node.style.animationDelay = `${i * 120}ms`
      node.classList.add('animate-fade-up')
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,57,208,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,57,208,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blue glow blob top-right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(15,57,208,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Orange accent blob bottom-left */}
      <div
        className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="section-padding max-w-7xl mx-auto w-full py-20 md:py-28">
        <div className="max-w-4xl">

          {/* Available badge */}
          <div className="hero-reveal opacity-0 mb-8">
            <span className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-display font-semibold px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for remote roles, freelance projects, and startup design collaborations.
            </span>
          </div>

          {/* Main headline */}
          <h1 className="hero-reveal opacity-0 font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-brand-dark leading-[1.1] tracking-tight mb-6">
            Product Marketing
            <br />
            <span className="text-brand-blue">Designer</span>
            <span className="text-brand-muted font-medium"> (UI/UX + Brand)</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-reveal opacity-0 font-body text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl mb-10">
            I design high-performing visuals and interfaces that help startups grow, convert, and scale{' '}
            <span className="text-brand-dark font-medium">grow</span>,{' '}
            <span className="text-brand-dark font-medium">convert</span>, and{' '}
            <span className="text-brand-dark font-medium">scale</span>.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
  <a 
    href="#case-studies" 
    className="bg-[#0F39D0] hover:bg-[#0b2fa8] text-white px-7 py-3 rounded-md font-semibold transition-all"
  >
    View Case Studies →
  </a>

  <a 
    href="#contact" 
    className="border-2 border-[#0F39D0] text-[#0F39D0] hover:bg-[#0F39D0] hover:text-white px-7 py-3 rounded-md font-semibold transition-all"
  >
    Let’s Work Together
  </a>
</div>

          {/* Skill badges */}
          <div className="hero-reveal opacity-0 mt-8 flex flex-wrap gap-2 mb-14">
            {badges.map((badge) => (
              <span key={badge} className="tag">{badge}</span>
            ))}
          </div>

          {/* Stats */}
          <div className="hero-reveal opacity-0 flex flex-wrap gap-10">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-display font-bold text-3xl text-brand-dark">{stat.value}</p>
                <p className="font-body text-sm text-brand-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted animate-bounce">
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
