import type { LucideIcon } from 'lucide-react'

export type StepOption = { icon: LucideIcon; label: string }
export type Step = { icon: LucideIcon; title: string; text?: string; options?: readonly StepOption[] }
