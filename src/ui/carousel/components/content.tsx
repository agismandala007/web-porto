'use client'

import { cn } from '@/lib'

import { useCarousel } from '../context'
import type { CarouselContentProps } from '../types'

export const CarouselContent = ({
  className,
  ...props
}: CarouselContentProps) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
}
