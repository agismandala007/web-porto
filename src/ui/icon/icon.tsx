import { Icon as Iconify } from '@iconify/react'
import { cn } from '@/lib'
import { iconWrapper } from './icon.var'
import type { IconProps } from './types'

/**
 * Icon component Props
 *
 * @param {IconProps} props - Component properties
 * @param {string} props.size  - default size = sm (16px) : 2xs = 12px, xs = 14px, sm = 16px, md = 20px, lg = 24px, xl = 32px, 2xl = 48px, 3xl = 64px, full = 100%
 * @param {string} props.stroke  - default size = md (2px) : xs = 1px, sm = 1.5px, md = 2px, lg = 2.5px
 * @param {string} props.className - Additional className to customize the icon
 */

export function Icon({
  size = 'sm',
  stroke = 'md',
  className,
  ...props
}: IconProps) {
  return (
    <Iconify
      className={cn(iconWrapper({ size, stroke }), className)}
      {...props}
    />
  )
}
