import { Icon } from '@iconify/react'
import { cn } from '@/lib'
import { cva } from 'class-variance-authority'
import type { CrumbSeparatorProps } from '../types'

const crumbListWrapper = cva(
  'text-gray-400 last:hidden [&>svg]:h-3.5 [&>svg]:w-3.5',
)

export function CrumbSeparator({
  className,
  children,
  ...props
}: CrumbSeparatorProps) {
  return (
    <li className={cn(crumbListWrapper(), className)} {...props}>
      {children ?? <Icon icon="lucide:chevron-right" />}
    </li>
  )
}
