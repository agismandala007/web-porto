import { Slot } from 'radix-ui'
import { flexWrapper } from './flex.var'
import type { FlexProps } from './types'
import { cn } from '@/lib'

export function Flex({
  align = 'none',
  justify = 'start',
  direction = 'row',
  wrap,
  asChild,
  className,
  ...props
}: FlexProps) {
  const Comp = asChild ? Slot.Root : 'div'

  return (
    <Comp
      className={cn(
        flexWrapper({ align, justify, direction, wrap }),
        className,
      )}
      {...props}
    />
  )
}
