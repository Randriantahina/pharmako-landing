import type { TeamMember } from './types'

// Photos : déposer le fichier dans public/team/ puis renseigner `photo` (ex. photo: 'dario.jpg').
export const TEAM: readonly TeamMember[] = [
  { name: 'Dario', role: 'CEO', photo: 'dario.jpg' },
  { name: 'Shanjeev', role: 'Développeur', photo: 'shanjeev.jpg' },
  { name: 'Stanislas', role: 'Directeur Commercial', photo: 'stanislas.jpg' },
  { name: 'Mihanta', role: 'Rôle', photo: 'mihanta.jpg' },
  { name: 'Vaniah', role: 'Rôle', photo: 'vaniah.jpg' },
]
