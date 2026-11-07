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
          <h1 className="text-4xl leading-[1.05] text-brand-deep sm:text-5xl lg:text-6xl">
            Trouvez votre pharmacie, vos médicaments et <span className="text-primary">votre prix</span> avant de vous déplacer.
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Pharmako vous montre la pharmacie de garde la plus proche, vous laisse discuter avec le pharmacien pour savoir si vos médicaments sont disponibles, puis vous envoie un devis. Vous payez en Mobile Money et vous retirez avec un QR code.
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
