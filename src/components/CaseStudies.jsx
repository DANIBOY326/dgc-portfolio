import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const caseStudies = [
  {
    id: 1,
    tag: 'UI/UX Design',
    title: 'Opay Sign Up Flow Redesign',
    tagline: 'Redesigning a fintech sign up/sign in interface to improve clarity, usability, and user trust (Personal Project)',
    color: 'blue',
    accentColor: '#0F39D0',
    lightBg: '#EEF2FF',
    problem:
      "Opay's existing interface was cluttered and inconsistent across their payment, savings, and transfer flows. New users were dropping off during onboarding at a high rate, and returning users reported confusion navigating between core features. Trust signals were missing - a critical gap for a fintech product handling real money.",
    goal:
      "Redesign the core user flows to reduce drop-off at onboarding, improve task completion rate on key features (transfers, bill payments), and increase user trust through clear information hierarchy and visual credibility.",
    approach:
      "I started with a full UX audit of the existing flows, mapping friction points and comparing patterns from top-performing fintech apps (Monzo, PiggyVest, Chipper). I then built low-fidelity wireframes for 5 key user journeys, tested assumptions with 8 real users, and iterated before moving to high-fidelity design in Figma with a fresh design system.",
    solution:
      "Delivered a clean, card-based UI system with simplified navigation, a redesigned onboarding flow with progressive disclosure, and new visual trust indicators (security badges, transaction confirmation screens). Built a Figma component library with 60+ reusable components for the dev handoff.",
    outcome:
       "Improved usability, simplified key flows, and increased user confidence through clearer navigation, stronger hierarchy, and trust-focused interface patterns.",
    tools: ['Figma', 'Maze (user testing)'],
  },
  {
    id: 2,
    tag: 'Marketing & Ad Creatives',
    title: 'Social Media Ad Campaign',
    tagline: 'Designing conversion-focused creatives built for attention, clarity, and action',
    color: 'orange',
    accentColor: '#FF6B35',
    lightBg: '#FFF4F0',
    problem:
      "A direct-to-consumer brand was spending significant budget on Meta ads but seeing poor click-through rates and rising cost-per-acquisition. Their existing creatives were generic stock-photo driven visuals that failed to communicate their value proposition in the first 2 seconds of a scroll.",
    goal:
      "Create a batch of conversion-focused ad creatives across multiple formats (static, carousel, story) that immediately communicate value, match the audience's pain points, and significantly improve CTR and ROAS.",
    approach:
      "Audited top-performing competitors and analyzed the brand's past ad data to identify which hooks worked best. Developed 4 creative concepts with different visual hooks - problem-first, social proof, before/after, and bold headline. Designed and delivered 18 final assets across all Meta placements.",
    solution:
      "A full ad creative pack: 6 static single-image ads, 4 carousel sets, 4 story/reel formats, and 4 square formats - all built with clear hierarchy, high-contrast visuals, and direct CTAs. Each asset was sized and optimized for its placement with copy variants included.",
    outcome:
      "Improved message clarity, strengthened campaign visibility, and increased engagement potential through bold, CTA-focused creative direction.",
    tools: ['CorelDRAW','Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro', 'Meta Ads Manager'],
  },
  {
    id: 3,
    tag: 'Brand Identity',
    title: 'Brand Identity Project',
    tagline: 'Building a cohesive brand system that speaks before a word is said',
    color: 'blue',
    accentColor: '#0F39D0',
    lightBg: '#EEF2FF',
    problem:
      "A growing startup was operating without a cohesive visual identity. Their logo was outdated, their color usage was inconsistent across channels, and their pitch decks, social media, and website looked like three different companies. This was actively hurting their credibility with investors and enterprise clients.",
    goal:
      "Design a professional, scalable brand identity system from the ground up - including a wordmark, full color system, typography stack, icon style, and usage guidelines that any team member could apply consistently.",
    approach:
      "Conducted a brand strategy workshop with the founding team to define positioning, personality, and competitive differentiation. Developed 3 distinct visual directions with mood boards, then refined the chosen direction through 2 rounds of feedback into a complete brand system.",
    solution:
      "Delivered a comprehensive brand identity package: primary and secondary logo variants, a 5-color palette with usage rules, 2-font typographic system, icon/illustration style guide, pattern and texture assets, and a 30-page brand guidelines document covering all use cases.",
    outcome:
      "Improved brand consistency, strengthened visual credibility, and created a scalable identity system for use across digital, print, and presentation touchpoints.",
    tools: ['CorelDRAW', 'Adobe Illustrator', 'Figma', 'Notion (brand book)'],
  },
  {
    id: 4,
    tag: 'Print & Production',
    title: 'Print / Production Design',
    tagline: 'High-impact print collateral that carries the brand into the physical world',
    color: 'orange',
    accentColor: '#FF6B35',
    lightBg: '#FFF4F0',
    problem:
      "A logistics and events company needed a full suite of branded print materials for a major trade show - with a tight 5-day turnaround. They had no existing design system and the materials needed to look cohesive, professional, and represent the company accurately to enterprise-level clients.",
    goal:
      "Design and deliver print-ready files for a complete set of event and marketing print materials that maintained brand consistency, met printer specifications, and were delivered within the tight deadline.",
    approach:
      "Started by establishing a rapid visual identity (colors, type, layout structure) approved in 24 hours. Then sequenced the work by complexity - starting with the large-format banner which set the visual tone, then moving to smaller collateral. Maintained daily check-ins for fast feedback cycles.",
    solution:
      "Delivered 8 print-ready assets: 2 large-format pull-up banners, 3 flyer variants (A4 + DL), 1 event brochure (tri-fold), 1 business card design (both sides), and 1 branded envelope. All files delivered in press-ready PDF with bleed, crop marks, and color profiles.",
    outcome:
      "Delivered cohesive, print-ready materials with stronger brand consistency, clearer presentation, and improved physical brand presence.",
    tools: ['CorelDRAW', 'Adobe Photoshop', 'Adobe Illustrator', 'Preflight PDF checks'],
  },
]

function CaseCard({ cs, isOpen, onToggle }) {
  return (
    <div className={`reveal card case-card overflow-hidden`}>
      {/* Card Header */}
      <button
        className="w-full text-left p-8 focus:outline-none group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="tag"
                style={{ color: cs.accentColor, background: cs.lightBg }}
              >
                {cs.tag}
              </span>
              <span className="text-xs font-body text-brand-muted">Project {cs.id} of 4</span>
            </div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-brand-dark mb-2 group-hover:text-brand-blue transition-colors">
              {cs.title}
            </h3>
            <p className="font-body text-brand-muted text-sm leading-relaxed">{cs.tagline}</p>
          </div>
          {/* Toggle icon */}
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              isOpen ? 'bg-brand-blue border-brand-blue text-white' : 'border-brand-border text-brand-muted group-hover:border-brand-blue group-hover:text-brand-blue'
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expandable content */}
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-8 border-t border-brand-border pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: 'Problem', text: cs.problem, icon: '⚠️' },
              { label: 'Goal', text: cs.goal, icon: '🎯' },
              { label: 'Approach', text: cs.approach, icon: '🧩' },
              { label: 'Solution', text: cs.solution, icon: '✅' },
            ].map(({ label, text, icon }) => (
              <div key={label}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">{icon}</span>
                  <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-brand-dark">
                    {label}
                  </h4>
                </div>
                <p className="font-body text-brand-muted leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>

          {/* Outcome — full width highlight */}
          <div
            className="mt-8 p-6 rounded-xl"
            style={{ background: cs.lightBg }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">📈</span>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest" style={{ color: cs.accentColor }}>
                Outcome
              </h4>
            </div>
            <p className="font-body text-brand-dark leading-relaxed text-sm font-medium">{cs.outcome}</p>
          </div>

          {/* Tools used */}
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <span className="font-body text-xs text-brand-muted mr-1">Tools used:</span>
            {cs.tools.map((tool) => (
              <span key={tool} className="text-xs font-body bg-gray-50 border border-brand-border text-brand-muted px-3 py-1 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const sectionRef = useReveal()
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section id="case-studies" ref={sectionRef} className="section-gap bg-white">
      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16">
          <div className="accent-line" />
          <p className="font-display font-semibold text-brand-blue text-sm uppercase tracking-widest mb-3">Case Studies</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            Work that <span className="text-brand-blue">moved the needle</span>
          </h2>
          <p className="font-body text-brand-muted text-lg max-w-2xl">
            Four projects. Four different challenges. Each one solved with intention,
            strategy, and craft - then measured against real business outcomes.
          </p>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-4">
          {caseStudies.map((cs) => (
            <CaseCard
              key={cs.id}
              cs={cs}
              isOpen={openId === cs.id}
              onToggle={() => toggle(cs.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-12 text-center">
          <p className="font-body text-brand-muted mb-4">
            Explore selected visual projects, campaigns, and production work in a detailed PDF portfolio.
          </p>
          <a
          href="/Portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          View Full Portfolio PDF
        </a>
        </div>

      </div>
    </section>
  )
}
