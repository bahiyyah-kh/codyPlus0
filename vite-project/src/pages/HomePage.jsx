import CTASection from '../components/CTASection.jsx'
import Footer from '../components/Footer.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'

export default function HomePage() {
  return (
    <>
      <main>
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
