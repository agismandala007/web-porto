'use client'

import { cn } from '@/lib'
import { Icon } from '../../icon'
import { useCarousel } from '../context'
import type { CarouselNextProps } from '../types'
import { carouselNextWrapper } from './next.var'

export const CarouselNext = ({ className, ...props }: CarouselNextProps) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      type="button"
      className={cn(
        carouselNextWrapper(),
        orientation === 'horizontal'
          ? '-translate-y-1/2 top-1/2 right-10'
          : '-bottom-12 -translate-x-1/2 left-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon
        icon="ic:outline-chevron-right"
        className="mx-auto size-7 text-brand-primary"
      />
      <span className="sr-only">Next slide</span>
    </button>
  )
}
