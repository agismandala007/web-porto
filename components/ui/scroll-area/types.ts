import type { ScrollArea as ScrollAreaPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'

export type ScrollbarProps = ComponentProps<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>

export type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root> &
  Pick<ScrollbarProps, 'orientation'> & {
    maxHeight?: string
    viewPortClassName?: string
    viewPortRef?: React.RefObject<HTMLDivElement | null>
  }
