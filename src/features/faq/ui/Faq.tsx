import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'
import { Reveal } from '@/shared/components/Reveal'
import { SectionHeading } from '@/shared/components/SectionHeading'
import { FAQ } from '../data'

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading tag="FAQ" title="Vos questions fréquentes" />
        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
