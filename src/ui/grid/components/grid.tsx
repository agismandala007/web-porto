import { cn } from '@/lib'
import { Slot } from 'radix-ui'
import type { GridProps } from '../types'
import { gridWrapper } from './grid.var'

export function Grid({
  templateColumns = 'none',
  templateRows = 'none',
  autoColumns = false,
  autoRows = false,
  asChild,
  className,
  ...props
}: GridProps) {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      className={cn(
        gridWrapper({
          templateColumns,
          templateRows,
          autoColumns,
          autoRows
        }),
        className,
      )}
      {...props}
    />
  )
}
