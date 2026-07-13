import { cn } from '@/lib'
import { ScrollArea as ScrollBarPrimitive } from 'radix-ui'
import type { ScrollbarProps } from '../types'
import { scrollBarThumb, scrollBarWrapper } from './scrollbar.var'

export function ScrollBar({
  className,
  orientation = 'vertical',
  children,
  ...props
}: ScrollbarProps) {
  return (
    <ScrollBarPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(scrollBarWrapper({ orientation }), className)}
      {...props}
    >
      <ScrollBarPrimitive.ScrollAreaThumb className={scrollBarThumb()} />
    </ScrollBarPrimitive.ScrollAreaScrollbar>
  )
}
