'use client'

import type { ReactElement } from 'react'
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'

import { cn } from '@/lib/utils'

type VerticalTimelineProps = {
  className?: string
  children: React.ReactNode
}

function VerticalTimeline({ children, className }: VerticalTimelineProps) {
  const lineHeightRef = useRef<HTMLDivElement>(null)
  const lastElementRef = useRef<HTMLDivElement>(null)

  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const element = lastElementRef.current
    if (!element) return

    setLineHeight(element.offsetHeight)
  }, [])

  const childrenWithRefs = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child

    const isLast = index === Children.count(children) - 1

    return isLast
      ? cloneElement(child as ReactElement<any>, { ref: lastElementRef })
      : child
  })

  return (
    <div className={cn('relative mx-auto max-w-3xl', className)}>
      <div
        ref={lineHeightRef}
        className={cn(
          'absolute -left-0.5 top-0.5 w-1 -translate-x-0 bg-ginfizz-950 lg:left-1/2 lg:-translate-x-1/2'
        )}
        style={{
          height: `calc(100% - (${lineHeight}px)`,
        }}
      />

      <div className="flex flex-col gap-10">{childrenWithRefs}</div>
    </div>
  )
}

type VerticalTimelineElementProps = {
  children: React.ReactNode
  direction?: 'left' | 'right'
}

const VerticalTimelineElement = forwardRef<
  HTMLDivElement,
  VerticalTimelineElementProps
>(({ children, direction = 'left' }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex w-full items-center justify-start gap-4',
        direction === 'right' && 'justify-start lg:justify-end'
      )}
    >
      <div className="relative w-full lg:w-1/2">
        <div
          className={cn(
            'absolute size-3 -translate-x-1/2 rounded-full bg-ginfizz-700 shadow-md lg:left-0',
            direction === 'left' && 'left-0 lg:left-full'
          )}
        />
        <div className="mx-5">{children}</div>
      </div>
    </div>
  )
})

VerticalTimelineElement.displayName = 'VerticalTimelineElement'

export { VerticalTimeline, VerticalTimelineElement }
