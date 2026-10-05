import { cn } from '@/lib'
import { Slot } from 'radix-ui'
import type { GridItemProps } from '../types'
import { gridItemWrapper } from './item.var'

export function GridItem({
  className,
  colSpan,
  rowSpan,
  asChild,
  ...props
}: GridItemProps) {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      className={cn(gridItemWrapper({ colSpan, rowSpan }), className)}
      {...props}
    />
  )
}
