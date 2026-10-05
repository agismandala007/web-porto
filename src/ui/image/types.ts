import type { VariantProps } from 'class-variance-authority'
import type { Avatar as AvatarPrimitive } from 'radix-ui'
import type { ComponentProps } from 'react'
import type { imageImage, imageWrapper } from './components/image.var'

export type ImageProps = Omit<
  ComponentProps<typeof AvatarPrimitive.Root>,
  'size'
> &
  VariantProps<typeof imageWrapper> &
  VariantProps<typeof imageImage> & {
    src: string | null
    alt: string | null

    aspectRatio?: number
    h?: string
    w?: string
    boxSize?: string
  }

export type ImageFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>
