import { MessagesSquare, QrCode, Search } from 'lucide-react'
import type { Step } from './types'

export const STEPS: readonly Step[] = [
  { icon: Search, title: 'Trouvez', text: 'Ouvrez la carte : voyez les pharmacies de garde et la plus proche de vous.' },
  { icon: MessagesSquare, title: 'Discutez et recevez le devis', text: 'Écrivez ou appelez le pharmacien, envoyez votre ordonnance, recevez le prix exact.' },
  { icon: QrCode, title: 'Payez et retirez', text: 'Payez en Mobile Money, puis montrez votre QR code au comptoir. Ou faites-vous livrer.' },
]
