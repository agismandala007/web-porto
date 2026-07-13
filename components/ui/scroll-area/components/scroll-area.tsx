
import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui'
import type { ScrollAreaProps } from '../types'
import { scrollAreaViewport, scrollAreaWrapper } from './scroll-area.var'
import { ScrollBar } from './scrollbar'
import { cn } from '@/lib'

export function ScrollArea({
  type = 'scroll',
  orientation = 'vertical',
  className,
  viewPortClassName,
  viewPortRef,
  maxHeight,
  children,
  ...props
}: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      type={type}
      className={cn(scrollAreaWrapper(), className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className={cn(scrollAreaViewport(), viewPortClassName)}
        style={{
          maxHeight,
        }}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation={orientation} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}
