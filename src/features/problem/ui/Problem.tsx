import { Card, CardDescription, CardTitle } from '@/shared/ui/card'
import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { PROBLEMS } from '../data'

export function Problem() {
  return (
    <section id="probleme" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading tag="Le problème" title="Acheter ses médicaments ne devrait pas être un parcours du combattant.">
        Personne ne devrait se déplacer, attendre, puis repartir les mains vides. On mérite de savoir avant d’y aller.
      </SectionHeading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <Card className="h-full transition-shadow duration-500 hover:shadow-lg">
              <span className="grid size-12 place-items-center rounded-full bg-secondary text-primary"><p.icon className="size-6" /></span>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.text}</CardDescription>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
