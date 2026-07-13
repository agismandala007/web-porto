import { VariantProps } from 'class-variance-authority'
import { BadgeVariant } from './components/badge.var'

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof BadgeVariant>
