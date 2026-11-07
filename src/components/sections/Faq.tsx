import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const FAQ = [
  { q: 'Pharmako gère-t-il le stock des pharmacies ?', a: 'Non. La disponibilité et le prix passent par la discussion avec le pharmacien : il vous répond et crée le devis lui-même.' },
  { q: 'Comment payer ?', a: 'Dans l’application, avec MVola, Orange Money ou Airtel Money. Le devis inclut le prix des médicaments et de petits frais de service.' },
  { q: 'Comment retirer mes médicaments ?', a: 'Après paiement, un QR code s’affiche. Montrez-le au comptoir : la pharmacie le vérifie et vous remet votre commande.' },
  { q: 'Puis-je envoyer mon ordonnance ?', a: 'Oui, prenez-la en photo et envoyez-la au pharmacien dans la discussion.' },
  { q: 'Et la livraison ?', a: 'La livraison arrive bientôt, avec nos partenaires de livraison. En attendant, le retrait en pharmacie sans queue est disponible.' },
  { q: 'Comment trouver une pharmacie de garde ?', a: 'La carte affiche les pharmacies de garde, votre position et la pharmacie la plus proche de vous.' },
]

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
