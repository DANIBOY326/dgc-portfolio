import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'UI/UX Design',
    subtitle: 'Web & Mobile',
    description:
      'User-centered interfaces that reduce friction and drive conversions. I design products that feel intuitive, perform beautifully, and align with business goals from the first click to the final CTA.',
    outcomes: ['Higher conversion rates', 'Reduced churn', 'Better retention'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Marketing & Ad Creatives',
    subtitle: 'Social & Digital',
    description:
      'Scroll-stopping visuals built for performance. From Meta ads to LinkedIn banners, I create marketing assets that speak directly to your audience and move them to act.',
    outcomes: ['Stronger CTR', 'On-brand consistency', 'Campaign-ready assets'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Brand Identity',
    subtitle: '& Design Systems',
    description:
      'Strategic identity design that makes your brand instantly recognizable. I build cohesive systems - logos, color, type, tone - that scale across every touchpoint your customers see.',
    outcomes: ['Consistent brand voice', 'Scalable design system', 'Market positioning'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    title: 'Conversion-Focused Visuals',
    subtitle: 'Print & Production',
    description:
      'Design that bridges digital and physical - brochures, pitch decks, packaging, and print materials that carry your brand message into every room and inbox.',
    outcomes: ['Print-ready files', 'Brand cohesion', 'Professional polish'],
  },
]

export default function Services() {
  const sectionRef = useReveal()

  return (
    <section id="services" ref={sectionRef} className="section-gap bg-brand-gray">
      <div className="section-padding max-w-7xl mx-auto">

        {/* Section header */}
        <div className="reveal mb-16">
          <div className="accent-line" />
          <p className="font-display font-semibold text-brand-blue text-sm uppercase tracking-widest mb-3">What I Do</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            Design that drives <span className="text-brand-blue">real business results</span>
          </h2>
          <p className="font-body text-brand-muted text-lg max-w-2xl">
            Every deliverable is grounded in strategy. I don't just make things look good - I make
            sure they work hard for your business.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal card case-card p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <div className="mb-3">
                <h3 className="font-display font-semibold text-xl text-brand-dark">{service.title}</h3>
                <p className="font-body text-sm text-brand-muted mt-0.5">{service.subtitle}</p>
              </div>

              {/* Description */}
              <p className="font-body text-brand-muted leading-relaxed mb-6">{service.description}</p>

              {/* Outcomes */}
              <div className="flex flex-wrap gap-2">
                {service.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="inline-flex items-center gap-1.5 text-xs font-body text-brand-muted bg-gray-50 border border-brand-border px-3 py-1.5 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
