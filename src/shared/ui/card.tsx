import * as React from 'react'
import { cn } from '@/shared/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('flex flex-col gap-3 rounded-xl border bg-card p-6 text-card-foreground shadow-sm', className)}
      {...props}
    />
  )
}
function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 className={cn('text-xl leading-tight', className)} {...props} />
}
function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('text-sm leading-relaxed text-muted-foreground', className)} {...props} />
}

export { Card, CardTitle, CardDescription }
