import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'Charisma Epoxies Canada ',
    role: 'International Firm',
    quote:
      'Daniel transformed our brand visuals into something more professional and cohesive. Communication was smooth and delivery was timely. He understood the brief clearly and delivered an internatioanl level design that exceeded expectations.',
  },
  {
    name: 'Clarion Olusegun',
    role: 'Founder, Teens Arise Initiative',
    quote:
      'His final designs gave our brand a more professional look and helped us communicate better with our audience.',
  },
  {
    name: 'Kelechi C. Ogbodo',
    role: 'Major Lead, Unicorn Impact Network',
    quote:
      'I wish i could have Daniel by my side all the time. He is a great team player, and i elieve Daniel will definitely blow the mind of his clients over and over again. I recommend him.',
  },
  {
    name: 'Queenmary Ikuejamofo',
    role: 'Fashion Hub / HRM Trainee',
    quote:
      'It was great experience working with Daniel, exploring ideas and how creative he was into bringing my ideas into fusion. I also love the fact that he was flexible. I would definitely recommend him at any opportunity i get.',
  },
  {
    name: 'Ruth Uzoma',
    role: 'Software Developer / Operation Analyst',
    quote:
      'Daniel is a great designer. He takes his time to deliver quality job. Having worked with him, i will say he has so much value to deliver. He is passionate about graphics/creative visuals and i see him advancing beyond this space.',
  },
  {
    name: 'Adaeze Ejimofor',
    role: 'Software Developer / Operation Analyst',
    quote:
      'He is a dedicated designer. Having worked on the same team with him, his creative skills and attention to detail consistently elevated out projects. He added greatly to our team.',
  },
  {
    name: 'Livinus Ihum',
    role: 'Data Scientist / Economist',
    quote:
      'For high, quality and impactful designs, i recommend Daniel.',
  },
]

export default function Testimonials() {
  const sectionRef = useReveal()

  return (
    <section id="testimonials" ref={sectionRef} className="section-gap bg-brand-gray">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="reveal mb-12">
          <div className="accent-line" />
          <p className="font-display font-semibold text-brand-blue text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            Trusted by clients and collaborators
          </h2>
          <p className="font-body text-brand-muted text-lg max-w-2xl">
            Feedback from people I’ve worked with across branding, marketing, digital, and print design projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="reveal card p-6">
              <p className="font-body text-brand-muted leading-relaxed mb-6">
                “{item.quote}”
              </p>
              <div>
                <h4 className="font-display font-semibold text-brand-dark">
                  {item.name}
                </h4>
                <p className="font-body text-sm text-brand-muted">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}