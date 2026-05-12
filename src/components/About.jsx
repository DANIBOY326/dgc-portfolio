import { useReveal } from '../hooks/useReveal'
import profile from '../assets/profile.jpg'

const values = [
  {
    icon: '🎯',
    title: 'Strategy First',
    desc: 'Every design decision is grounded in your business goals and audience insights - not aesthetic preferences alone.',
  },
  {
    icon: '🤝',
    title: 'Clear Communication',
    desc: "You'll always know where the project stands. I collaborate closely and move fast without cutting corners.",
  },
  {
    icon: '📐',
    title: 'Pixel-Perfect Delivery',
    desc: 'From wireframe to final file, every deliverable is polished, production-ready, and built to spec.',
  },
  {
    icon: '🌍',
    title: 'Remote-Ready',
    desc: 'Fully equipped and experienced working asynchronously with international teams, startups, and agencies.',
  },
]

const skills = [
  'CorelDRAW', 'Figma', 'Canva Pro', 'Adobe Photoshop', 'Adobe Illustrator',
  'Adobe InDesign', 'Adobe XD', 'Figma Make', 'UI Design', 'UX Research',
  'Brand Identity', 'Design Systems', 'Ad Creatives',
  'Print Design', 'Social Media Design',
]

export default function About() {
  const sectionRef = useReveal()

  return (
    <section id="about" ref={sectionRef} className="section-gap bg-brand-gray">
      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <div className="reveal mb-16">
          <div className="accent-line" />
          <p className="font-display font-semibold text-brand-blue text-sm uppercase tracking-widest mb-3">About</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            The designer behind <span className="text-brand-blue">DGC</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Bio */}
          <div className="reveal">
            {/* 
              PHOTO PLACEHOLDER:
              Replace the div below with:
              <img src="/src/assets/photo.jpg" alt="Designer" className="w-full rounded-2xl mb-8 shadow-sm" />
            */}
            <div className="w-full h-64 mb-8 rounded-2xl overflow-hidden border border-blue-100">
  <img
    src={profile}
    alt="Daniel Ojo"
    className="w-full h-full object-cover"
  />
</div>

            <p className="font-body text-brand-muted leading-relaxed text-lg">
        I’m Daniel (Temitope) Ojo a multidisciplinary Graphic, Brand, and UI/UX Designer with experience spanning visual communication, digital products, print production, and brand systems.
        Over the years, I’ve worked on projects across branding, fintech UI/UX, marketing campaigns, publication materials, and large-format print solutions for businesses, startups, institutions, and public-sector organizations.
        My approach combines strategy, usability, storytelling, and clean visual execution to create designs that not only look good, but communicate clearly and drive results.
        I’m passionate about building impactful digital and visual experiences that connect brands with people across both physical and digital environments.
      </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Work With Me</a>
              {/* 
                RESUME LINK: Replace '#' with your actual resume PDF link
              */}
              <a
                href="/Daniel Ojo-Master Resume.pdf"
                download
                className="btn-outline"
              >
                Download Resume
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
            </div>
          </div>

          {/* Right: Values + Skills */}
          <div className="reveal flex flex-col gap-10">

            {/* Values */}
            <div>
              <h3 className="font-display font-semibold text-lg text-brand-dark mb-6">How I work</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="card p-5">
                    <span className="text-2xl mb-3 block">{v.icon}</span>
                    <h4 className="font-display font-semibold text-sm text-brand-dark mb-2">{v.title}</h4>
                    <p className="font-body text-xs text-brand-muted leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-display font-semibold text-lg text-brand-dark mb-4">Tools & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-xs bg-white border border-brand-border text-brand-muted px-3 py-1.5 rounded-full hover:border-brand-blue hover:text-brand-blue transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
