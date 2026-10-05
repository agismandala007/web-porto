import type { IconifyIcon } from '@iconify/react'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import type { featuredIconWrapper } from './featured-icon.var'

export type FeaturedIconProps = Omit<ComponentProps<'span'>, 'size'> &
  VariantProps<typeof featuredIconWrapper> & {
    icon: string | IconifyIcon
  }
