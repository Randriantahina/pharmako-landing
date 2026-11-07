import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function SectionHeading({ tag, title, children, light = false, center = true }: {
  tag?: string; title: ReactNode; children?: ReactNode; light?: boolean; center?: boolean
}) {
  return (
    <div className={cn('mb-12 flex max-w-2xl flex-col gap-4', center && 'mx-auto items-center text-center')}>
      {tag && <Badge variant={light ? 'outline' : 'secondary'}>{tag}</Badge>}
      <h2 className={cn('text-3xl leading-tight sm:text-4xl lg:text-5xl', light ? 'text-white' : 'text-brand-deep')}>{title}</h2>
      {children && <p className={cn('text-base sm:text-lg', light ? 'text-white/80' : 'text-muted-foreground')}>{children}</p>}
    </div>
  )
}
