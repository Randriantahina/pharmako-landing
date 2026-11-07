import { Badge } from '@/shared/ui/badge'
import { Card, CardDescription, CardTitle } from '@/shared/ui/card'
import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { FEATURES } from '../data'

export function ProductFeatures() {
  return (
    <section id="fonctionnalites" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading tag="Fonctionnalités" title="Tout ce qu’il vous faut, dans une seule application." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <Card className="h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-full bg-primary text-white"><f.icon className="size-6" /></span>
                  {f.soon && <Badge variant="soon">Bientôt</Badge>}
                </div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.text}</CardDescription>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
