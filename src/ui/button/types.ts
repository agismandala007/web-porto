import type { IconifyIcon } from '@iconify/react'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import type { buttonWrapper } from './components/button.var'
import type { iconButtonWrapper } from './components/icon-button.var'

export type IconButtonProps = Omit<
  ComponentProps<'button'>,
  'size' | 'children'
> &
  VariantProps<typeof iconButtonWrapper> & {
    icon: string | IconifyIcon
    loading?: boolean
  }

export type ButtonProps = Omit<ComponentProps<'button'>, 'size'> &
  VariantProps<typeof buttonWrapper> & {
    startIcon?: string | IconifyIcon
    endIcon?: string | IconifyIcon
    loading?: boolean
    i18nKey?: string
  }
