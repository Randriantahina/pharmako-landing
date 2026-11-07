import type { FaqItem } from './types'

export const FAQ: readonly FaqItem[] = [
  { q: 'Pharmako gère-t-il le stock des pharmacies ?', a: 'Non. La disponibilité et le prix passent par la discussion avec le pharmacien : il vous répond et crée le devis lui-même.' },
  { q: 'Comment payer ?', a: 'Dans l’application, avec MVola, Orange Money ou Airtel Money. Le devis inclut le prix des médicaments et de petits frais de service.' },
  { q: 'Comment retirer mes médicaments ?', a: 'Après paiement, un QR code s’affiche. Montrez-le au comptoir : la pharmacie le vérifie et vous remet votre commande.' },
  { q: 'Puis-je envoyer mon ordonnance ?', a: 'Oui, prenez-la en photo et envoyez-la au pharmacien dans la discussion.' },
  { q: 'Et la livraison ?', a: 'La livraison arrive bientôt, avec nos partenaires de livraison. En attendant, le retrait en pharmacie sans queue est disponible.' },
  { q: 'Comment trouver une pharmacie de garde ?', a: 'La carte affiche les pharmacies de garde, votre position et la pharmacie la plus proche de vous.' },
]
