import { ArrowRight, Play, ShieldCheck, MapPin } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { PhoneMockup } from './PhoneMockup'
import { Reveal } from '@/shared/components/Reveal'
import { HERO_POINTS } from '../data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-[#d9f3f0] via-[#eaf8f6] to-background pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-brand-mint/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="flex flex-col items-start gap-6">
          <Badge variant="outline"><MapPin className="size-3.5" /> Pharmacies d’Antananarivo, dans une seule app</Badge>
          <h1 className="text-4xl leading-[1.05] text-brand-deep min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
            Vous cherchez <span className="text-primary">une pharmacie ?</span>
          </h1>
          <p className="max-w-xl text-xl text-brand-deep sm:text-2xl">
            Pharmako vous met en relation avec les pharmacies près de chez vous. Vérifiez le stock, obtenez le prix, payez, puis récupérez ou faites-vous livrer.
          </p>
          <ul className="flex flex-col gap-3">
            {HERO_POINTS.map((p) => (
              <li key={p.label} className="flex items-center gap-3 text-base text-muted-foreground">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><p.icon className="size-4" /></span>
                {p.label}
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto"><a href="#telecharger">Télécharger Pharmako <ArrowRight /></a></Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto"><a href="#video"><Play /> Voir la démo</a></Button>
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
