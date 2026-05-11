import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
         <Testimonials />
         <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
