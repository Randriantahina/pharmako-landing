import { Smartphone } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { Reveal } from '@/shared/components/Reveal'
import { LINKS } from '@/shared/config/links'

export function CallToAction() {
  return (
    <section id="telecharger" className="px-4 sm:px-6">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark to-primary px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div aria-hidden className="absolute -right-16 -bottom-16 size-72 rounded-full bg-brand-mint/20 blur-2xl" />
          <h2 className="relative mx-auto max-w-2xl text-3xl leading-tight sm:text-5xl">Prêt à ne plus jamais chercher une pharmacie à l’aveugle ?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/80">Téléchargez Pharmako et trouvez vos médicaments avant de vous déplacer.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="light" size="lg"><a href={LINKS.download}><Smartphone /> Télécharger l’app</a></Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
