export type TeamMember = {
  name: string
  role: string
  /** Nom du fichier dans public/team (ex. 'prenom.jpg'). Sans photo : initiales affichées. */
  photo?: string
}
