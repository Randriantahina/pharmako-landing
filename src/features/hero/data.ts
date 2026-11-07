import { MapPin, MessageCircle, Wallet } from 'lucide-react'
import type { HeroPoint } from './types'

export const HERO_POINTS: readonly HeroPoint[] = [
  { icon: MapPin, label: 'Trouvez une pharmacie près de vous' },
  { icon: MessageCircle, label: 'Demandez le stock et le prix par message ou appel' },
  { icon: Wallet, label: 'Payez, puis récupérez ou faites-vous livrer' },
]
