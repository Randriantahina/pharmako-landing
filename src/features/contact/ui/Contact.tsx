import { Mail } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { LINKS } from '@/shared/config/links'
import { TEAM } from '../data'

function initials(name: string) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading tag="Contact" title="Une question ? Parlons-en.">
        L’équipe Pharmako vous répond avec plaisir.
      </SectionHeading>
      <ul className="mb-12 flex flex-wrap justify-center gap-x-6 gap-y-8">
        {TEAM.map((m, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <li className="flex w-36 flex-col items-center gap-3 text-center sm:w-40">
              {m.photo ? (
                <img src={`${import.meta.env.BASE_URL}team/${m.photo}`} alt={m.name} loading="lazy" className="size-24 rounded-full border-4 border-white object-cover shadow-md sm:size-28" />
              ) : (
                <span aria-hidden className="grid size-24 place-items-center rounded-full bg-secondary text-2xl text-brand-dark shadow-md sm:size-28">{initials(m.name)}</span>
              )}
              <div>
                <p className="text-brand-deep">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button asChild size="lg"><a href={LINKS.contact}><Mail /> Nous écrire</a></Button>
      </div>
    </section>
  )
}
