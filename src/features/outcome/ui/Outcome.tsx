import { X, Check } from 'lucide-react'
import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'

const BEFORE = ['Tourner d’une pharmacie à l’autre', 'Découvrir la rupture sur place', 'Payer un prix inconnu', 'Perdre du temps dans la queue']
const AFTER = ['Pharmacie de garde trouvée sur la carte', 'Disponibilité confirmée par chat ou appel', 'Devis clair avant de payer', 'Retrait rapide avec QR code']

export function Outcome() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading tag="Avant / Après" title="Fini les déplacements pour rien." />
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border bg-white p-8">
            <h3 className="mb-5 text-xl text-muted-foreground">Sans Pharmako</h3>
            <ul className="space-y-4">
              {BEFORE.map((t) => (
                <li key={t} className="flex items-start gap-3 text-muted-foreground"><X className="mt-0.5 size-5 shrink-0 text-destructive" />{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl bg-primary p-8 text-white shadow-xl shadow-primary/25">
            <h3 className="mb-5 text-xl">Avec Pharmako</h3>
            <ul className="space-y-4">
              {AFTER.map((t) => (
                <li key={t} className="flex items-start gap-3"><Check className="mt-0.5 size-5 shrink-0 text-brand-mint" />{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
