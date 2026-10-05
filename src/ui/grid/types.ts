import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'
import type { gridWrapper } from './components/grid.var'
import type { gridItemWrapper } from './components/item.var'

export type GridProps = ComponentProps<'div'> &
  VariantProps<typeof gridWrapper> & {
    asChild?: boolean
  }

export type GridItemProps = ComponentProps<'div'> &
  VariantProps<typeof gridItemWrapper> & {
    asChild?: boolean
  }
