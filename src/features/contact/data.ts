import type { TeamMember } from './types'

// Photos : déposer le fichier dans public/team/ puis renseigner `photo` (ex. photo: 'dario.jpg').
// Les deux dernières entrées sont des emplacements à remplir.
export const TEAM: readonly TeamMember[] = [
  { name: 'Dario', role: 'CEO' },
  { name: 'Shanjeev', role: 'Développeur' },
  { name: 'Stanislas', role: 'Directeur Commercial' },
  { name: 'Prénom Nom', role: 'Rôle' },
  { name: 'Prénom Nom', role: 'Rôle' },
]
