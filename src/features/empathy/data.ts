import { BadgeCheck, QrCode, Smartphone } from 'lucide-react'
import type { Proof } from './types'

export const PROOFS: readonly Proof[] = [
  { icon: BadgeCheck, title: 'Pharmacies validées', text: 'Chaque pharmacie est vérifiée et validée par notre équipe avant d’apparaître dans l’app.' },
  { icon: Smartphone, title: 'Paiement local', text: 'Vous payez avec MVola, Orange Money ou Airtel Money, sans carte bancaire.' },
  { icon: QrCode, title: 'Retrait sécurisé', text: 'Un code unique, vérifié au comptoir : la pharmacie sait que vous avez bien payé.' },
]
