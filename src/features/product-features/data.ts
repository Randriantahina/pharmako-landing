import { Bike, Map, MessageCircle, Phone, QrCode, Wallet } from 'lucide-react'
import type { Feature } from './types'

export const FEATURES: readonly Feature[] = [
  { icon: Map, title: 'Carte des pharmacies', text: 'Voyez les pharmacies de garde, votre position et la plus proche, en un coup d’œil.' },
  { icon: Phone, title: 'Appel direct', text: 'Un doute ? Appelez la pharmacie depuis l’app pour confirmer la disponibilité.' },
  { icon: MessageCircle, title: 'Chat avec le pharmacien', text: 'Envoyez votre ordonnance en photo et obtenez la disponibilité et le devis.' },
  { icon: Wallet, title: 'Paiement Mobile Money', text: 'MVola, Orange Money, Airtel Money : payez le devis en toute simplicité.' },
  { icon: QrCode, title: 'QR code de retrait', text: 'Après paiement, un QR code prouve votre achat. Montrez-le, repartez avec vos médicaments.' },
  { icon: Bike, title: 'Livraison', text: 'Recevez vos médicaments chez vous, sans bouger.' },
]
