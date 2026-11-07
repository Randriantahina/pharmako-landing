import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Logo } from '@/shared/components/Logo'
import { Button } from '@/shared/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/shared/ui/sheet'
import { LINKS } from '@/shared/config/links'
import { cn } from '@/shared/lib/utils'
import { NAV_ITEMS } from '../data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-40 transition-all', scrolled ? 'border-b bg-white/85 shadow-sm backdrop-blur-md' : 'bg-transparent')}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-brand-deep lg:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-primary">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex"><a href={LINKS.download} target="_blank" rel="noopener noreferrer">Télécharger</a></Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Ouvrir le menu"><Menu className="size-6" /></Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo />
              <nav className="mt-4 flex flex-col gap-1 text-lg" aria-label="Menu mobile">
                {NAV_ITEMS.map((n) => (
                  <SheetClose asChild key={n.href}>
                    <a href={n.href} className="rounded-xl px-3 py-3 text-brand-deep hover:bg-secondary">{n.label}</a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild><Button asChild size="lg" className="mt-auto"><a href={LINKS.download} target="_blank" rel="noopener noreferrer">Télécharger</a></Button></SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
