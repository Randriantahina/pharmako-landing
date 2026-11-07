import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { STEPS } from '../data'

export function Steps() {
  return (
    <section id="etapes" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading tag="Le plan" title="Trois étapes, et c’est réglé.">
        De l’ordonnance au médicament en main, tout se passe dans l’application.
      </SectionHeading>
      <ol className="relative grid gap-10 md:grid-cols-3">
        <div aria-hidden className="absolute top-8 right-[16%] left-[16%] hidden border-t-2 border-dashed border-primary/30 md:block" />
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.12}>
            <li className="relative flex flex-col items-center gap-4 text-center">
              <span className="relative grid size-16 place-items-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                <s.icon className="size-7" />
                <span className="absolute -top-1 -right-1 grid size-6 place-items-center rounded-full bg-brand-mint text-xs text-brand-deep">{i + 1}</span>
              </span>
              <h3 className="text-xl text-brand-deep">{s.title}</h3>
              {s.text && <p className="max-w-xs text-sm text-muted-foreground">{s.text}</p>}
              {s.options && (
                <ul className="flex w-full max-w-xs flex-col gap-2">
                  {s.options.map((o) => (
                    <li key={o.label} className="flex items-center gap-3 rounded-full border border-primary/25 bg-white px-4 py-2.5 text-left text-sm text-brand-deep shadow-sm">
                      <ArrowRight aria-hidden className="size-4 shrink-0 text-primary" />
                      <span className="flex-1">{o.label}</span>
                      <o.icon aria-hidden className="size-4 shrink-0 text-primary" />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
