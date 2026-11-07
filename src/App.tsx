import { CallToAction } from '@/components/sections/CallToAction'
import { Empathy } from '@/components/sections/Empathy'
import { Faq } from '@/components/sections/Faq'
import { Features } from '@/components/sections/Features'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/sections/Navbar'
import { Outcome } from '@/components/sections/Outcome'
import { Problem } from '@/components/sections/Problem'
import { Steps } from '@/components/sections/Steps'
import { VideoDemo } from '@/components/sections/VideoDemo'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Empathy />
        <Steps />
        <Features />
        <VideoDemo />
        <Outcome />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
