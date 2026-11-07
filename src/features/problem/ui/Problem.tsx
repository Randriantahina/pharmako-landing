import { Clock, MapPinOff, Receipt, PackageX } from 'lucide-react'
import { Card, CardDescription, CardTitle } from '@/shared/ui/card'
import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'

const PROBLEMS = [
  { icon: MapPinOff, title: 'Quelle pharmacie est de garde ?', text: 'La nuit ou le week-end, impossible de savoir laquelle est ouverte, ni où elle se trouve.' },
  { icon: PackageX, title: 'Le médicament est-il en stock ?', text: 'Vous traversez la ville pour apprendre qu’il est en rupture. Et il faut recommencer ailleurs.' },
  { icon: Receipt, title: 'Combien ça va coûter ?', text: 'Aucun prix à l’avance. Vous découvrez la note au comptoir, parfois trop tard.' },
  { icon: Clock, title: 'Et la queue…', text: 'Quand on est malade ou qu’on s’inquiète pour un proche, chaque minute d’attente compte.' },
]

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
