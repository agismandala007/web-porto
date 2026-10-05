import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import type { flexWrapper } from './flex.var'

export type FlexProps = ComponentProps<'div'> &
  VariantProps<typeof flexWrapper> & {
    asChild?: boolean
  }
