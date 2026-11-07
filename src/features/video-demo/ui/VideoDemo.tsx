import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'

export function VideoDemo() {
  return (
    <section id="video" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading tag="Démo" title="Voyez Pharmako en action.">
        Moins de deux minutes pour comprendre comment trouver, discuter, payer et retirer.
      </SectionHeading>
      <Reveal>
        <div className="overflow-hidden rounded-3xl border-4 border-white bg-brand-deep shadow-2xl shadow-brand-dark/20">
          <video className="aspect-video w-full" controls preload="metadata" poster={`${import.meta.env.BASE_URL}poster.jpg`} playsInline>
            <source src={`${import.meta.env.BASE_URL}video.mp4`} type="video/mp4" />
            Votre navigateur ne lit pas cette vidéo.
          </video>
        </div>
      </Reveal>
    </section>
  )
}
