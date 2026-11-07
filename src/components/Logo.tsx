import logo from '@/assets/logo.png'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" aria-label="Pharmako, retour en haut" className={cn('inline-flex shrink-0 items-center', className)}>
      <img src={logo} alt="Pharmako" className="h-10 w-auto sm:h-12" />
    </a>
  )
}
