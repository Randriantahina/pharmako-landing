import { ArrowRight, Play, ShieldCheck, MapPin } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { PhoneMockup } from './PhoneMockup'
import { Reveal } from '@/shared/components/Reveal'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#d9f3f0] via-[#eaf8f6] to-background pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-brand-mint/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex flex-col items-start gap-6">
          <Badge variant="outline"><MapPin className="size-3.5" /> Antananarivo · pharmacies de garde</Badge>
          <h1 className="text-5xl leading-[1.02] text-brand-deep sm:text-6xl lg:text-7xl">
            La pharmacie <span className="text-primary">dans votre poche.</span>
          </h1>
          <p className="text-xl text-brand-deep sm:text-2xl">Pharmacie de garde, stock et prix : sachez tout avant de bouger.</p>
          <p className="max-w-xl text-lg text-muted-foreground">
            Repérez la pharmacie de garde la plus proche, discutez avec le pharmacien, recevez votre devis, payez en Mobile Money et retirez avec un QR code. Sans queue, sans déplacement pour rien.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#telecharger">Télécharger Pharmako <ArrowRight /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#video"><Play /> Voir la démo</a></Button>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" /> Paiement MVola, Orange Money et Airtel Money
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="animate-float"><PhoneMockup /></div>
        </Reveal>
      </div>
    </section>
  )
}
