import { cn } from '@/lib'
import { cva } from 'class-variance-authority'
import type { CrumbListProps } from '../types'

const crumbListWrapper = cva(
  'inline-flex items-center gap-1.5 text-gray-900 text-sm data-[active=true]:font-bold data-[active=true]:text-primary-600',
)

export function CrumbList({ className, ...props }: CrumbListProps) {
  return <ol className={cn(crumbListWrapper(), className)} {...props} />
}
