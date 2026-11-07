import { Phone, MessageCircle, Wallet, QrCode, Bike, Map } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const FEATURES = [
  { icon: Map, title: 'Carte des pharmacies', text: 'Voyez les pharmacies de garde, votre position et la plus proche, en un coup d’œil.' },
  { icon: Phone, title: 'Appel direct', text: 'Un doute ? Appelez la pharmacie depuis l’app pour confirmer la disponibilité.' },
  { icon: MessageCircle, title: 'Chat avec le pharmacien', text: 'Envoyez votre ordonnance en photo et obtenez la disponibilité et le devis.' },
  { icon: Wallet, title: 'Paiement Mobile Money', text: 'MVola, Orange Money, Airtel Money : payez le devis en toute simplicité.' },
  { icon: QrCode, title: 'QR code de retrait', text: 'Après paiement, un QR code prouve votre achat. Montrez-le, repartez avec vos médicaments.' },
  { icon: Bike, title: 'Livraison', text: 'Recevez vos médicaments chez vous, sans bouger.', soon: true },
]

export function Features() {
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
