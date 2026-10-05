import { cn } from '@/lib'
import { Avatar as AvatarPrimitive } from 'radix-ui'
import type { ImageProps } from '../types'
import { imageImage, imageWrapper } from './image.var'

export function ImageUi({
  rounded = 'lg',
  aspectRatio,
  fit = 'cover',
  h,
  w,
  boxSize,
  src,
  alt,
  style,
  className,
  children,
  ...props
}: ImageProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(imageWrapper({ rounded }), className)}
      style={{
        height: !boxSize ? h : boxSize,
        width: !boxSize ? w : boxSize,
        aspectRatio: `${aspectRatio}`,
        ...style,
      }}
      {...props}
    >
      <AvatarPrimitive.Image
        src={src ?? ''}
        alt={alt ?? ''}
        className={imageImage({ fit })}
      />
      {children}
    </AvatarPrimitive.Root>
  )
}
