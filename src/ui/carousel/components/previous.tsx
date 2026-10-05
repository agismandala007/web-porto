'use client'

import { cn } from '@/lib'
import { Icon } from '../../icon'
import { useCarousel } from '../context'
import type { CarouselPreviousProps } from '../types'
import { carouselPreviousWrapper } from './previous.var'

export const CarouselPrevious = ({
  className,
  ...props
}: CarouselPreviousProps) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      type="button"
      className={cn(
        carouselPreviousWrapper(),
        orientation === 'horizontal'
          ? '-translate-y-1/2 top-1/2 left-10'
          : '-top-12 -translate-x-1/2 left-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Icon
        icon="ic:outline-chevron-left"
        className="mx-auto size-7 text-brand-primary"
      />
      <span className="sr-only">Previous slide</span>
    </button>
  )
}
