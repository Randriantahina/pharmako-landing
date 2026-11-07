import { Logo } from '@/shared/components/Logo'
import { LINKS } from '@/shared/config/links'

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo />
          <p className="text-sm text-muted-foreground">Vos médicaments, sans courir. Antananarivo, Madagascar.</p>
        </div>
        <nav className="flex gap-6 text-sm text-brand-deep" aria-label="Pied de page">
          <a href="#etapes" className="hover:text-primary">Comment ça marche</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <a href={LINKS.contact} className="hover:text-primary">Contact</a>
        </nav>
        <p className="text-xs text-muted-foreground">© 2026 Pharmako. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
