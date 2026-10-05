import { cn } from '@/lib'
import { cva } from 'class-variance-authority'
import type { CrumbItemProps } from '../types'

const crumbItemWrapper = cva(
  'inline-flex items-center gap-1.5 text-gray-900 text-sm data-[active=true]:font-bold data-[active=true]:text-primary-600',
)

export function CrumbItem({ className, ...props }: CrumbItemProps) {
  return <li className={cn(crumbItemWrapper(), className)} {...props} />
}
