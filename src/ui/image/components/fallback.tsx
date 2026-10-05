import { cn } from '@/lib'
import { cva } from 'class-variance-authority'
import { head, upperCase, words } from 'lodash'
import { Avatar as AvatarPrimitive } from 'radix-ui'
import type { ImageFallbackProps } from '../types'

const imageFallback = cva(
  'flex size-full items-center justify-center bg-gray-50 text-gray-400',
)

export function ImageFallback({
  className,
  children,
  ...props
}: ImageFallbackProps) {
  const abbreviationName =
    typeof children === 'string'
      ? words(children)
          ?.map((fallbackWord) => upperCase(head(fallbackWord)))
          .slice(0, 2)
          .join('')
      : ''

  return (
    <AvatarPrimitive.Fallback
      className={cn(imageFallback(), className)}
      {...props}
    >
      {!abbreviationName ? children : abbreviationName}
    </AvatarPrimitive.Fallback>
  )
}
