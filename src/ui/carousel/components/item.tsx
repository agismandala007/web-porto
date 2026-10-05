'use client'

import { cn } from '@/lib'

import { useCarousel } from '../context'
import type { CarouselItemProps } from '../types'

export const CarouselItem = ({ className, ...props }: CarouselItemProps) => {
  const { orientation } = useCarousel()

  return (
    // biome-ignore lint/a11y/useSemanticElements: <false>
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        'relative shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}
