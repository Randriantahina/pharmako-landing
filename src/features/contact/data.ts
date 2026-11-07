import type { TeamMember } from './types'

// Photos : déposer le fichier dans public/team/ puis renseigner `photo` (ex. photo: 'dario.jpg').
// La dernière entrée est un emplacement à remplir.
export const TEAM: readonly TeamMember[] = [
  { name: 'Dario', role: 'CEO', photo: 'dario.jpg' },
  { name: 'Shanjeev', role: 'Développeur', photo: 'shanjeev.jpg' },
  { name: 'Stanislas', role: 'Directeur Commercial' },
  { name: 'Mihanta', role: 'Rôle', photo: 'mihanta.jpg' },
  { name: 'Prénom Nom', role: 'Rôle' },
]
