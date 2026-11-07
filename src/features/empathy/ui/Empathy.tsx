import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { PROOFS } from '../data'

export function Empathy() {
  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading tag="On vous comprend" title="Nous avons vécu la même chose, alors nous avons construit Pharmako.">
          Pharmako est né à Antananarivo, d’un constat simple : on perd un temps précieux à chercher un médicament. Voici pourquoi vous pouvez nous faire confiance.
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-3">
          {PROOFS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="flex flex-col items-center gap-3 text-center">
              <span className="grid size-16 place-items-center rounded-full bg-primary text-white"><p.icon className="size-8" /></span>
              <h3 className="text-xl text-brand-deep">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
