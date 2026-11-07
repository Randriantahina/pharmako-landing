import { Bike, MessagesSquare, QrCode, Search, Store } from 'lucide-react'
import type { Step } from './types'

export const STEPS: readonly Step[] = [
  { icon: Search, title: 'Trouvez', text: 'Ouvrez la carte et repérez la pharmacie la plus proche de vous.' },
  { icon: MessagesSquare, title: 'Discutez par appel ou par message, puis recevez le devis', text: 'Posez vos questions au pharmacien, envoyez votre ordonnance en photo et recevez le prix exact.' },
  { icon: QrCode, title: 'Payez', text: 'Réglez en Mobile Money (MVola, Orange Money, Airtel Money), puis choisissez :', options: [{ icon: Bike, label: 'Faites-vous livrer' }, { icon: Store, label: 'Ou passez au comptoir avec votre QR code' }] },
]
