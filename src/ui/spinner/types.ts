import type { ComponentProps } from 'react'

export type SpinnerProps = ComponentProps<'svg'> & {
  variant?: 'primary' | 'secondary'
}
