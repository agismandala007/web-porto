import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import type { typoWrapper } from './typo.var'

export type TypoProps = Omit<ComponentProps<'p'>, 'size'> &
  VariantProps<typeof typoWrapper> & {
    asChild?: boolean
  }
