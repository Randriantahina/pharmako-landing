import { Clock, MapPinOff, PackageX, Receipt } from 'lucide-react'
import type { Problem } from './types'

export const PROBLEMS: readonly Problem[] = [
  { icon: MapPinOff, title: 'Quelle pharmacie est de garde ?', text: 'La nuit ou le week-end, impossible de savoir laquelle est ouverte, ni où elle se trouve.' },
  { icon: PackageX, title: 'Le médicament est-il en stock ?', text: 'Vous traversez la ville pour apprendre qu’il est en rupture. Et il faut recommencer ailleurs.' },
  { icon: Receipt, title: 'Combien ça va coûter ?', text: 'Aucun prix à l’avance. Vous découvrez la note au comptoir, parfois trop tard.' },
  { icon: Clock, title: 'Et la queue…', text: 'Quand on est malade ou qu’on s’inquiète pour un proche, chaque minute d’attente compte.' },
]
