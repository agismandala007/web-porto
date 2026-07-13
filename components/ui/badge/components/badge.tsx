import { cn } from '@/lib/utils'
import { BadgeProps } from '../types'
import { BadgeVariant } from './badge.var'

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(BadgeVariant({ variant }), className)} {...props} />
}
