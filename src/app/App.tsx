import { CallToAction } from '@/features/cta'
import { Empathy } from '@/features/empathy'
import { Faq } from '@/features/faq'
import { Footer } from '@/features/footer'
import { Hero } from '@/features/hero'
import { Navbar } from '@/features/navbar'
import { Outcome } from '@/features/outcome'
import { ProductFeatures } from '@/features/product-features'
import { Problem } from '@/features/problem'
import { Steps } from '@/features/steps'
import { VideoDemo } from '@/features/video-demo'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Empathy />
        <Steps />
        <ProductFeatures />
        <VideoDemo />
        <Outcome />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
