import type { IconProps as IconifyProps } from '@iconify/react'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import type { iconWrapper } from './icon.var'

export type IconProps = IconifyProps &
  VariantProps<typeof iconWrapper> &
  Omit<ComponentProps<'svg'>, 'size'>
