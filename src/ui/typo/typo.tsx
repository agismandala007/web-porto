import { Slot } from 'radix-ui'
import { cn } from '@/lib'
import type { TypoProps } from './types'
import { typoWrapper } from './typo.var'

export function Typo({
  size,
  fontWeight,
  colorPrimary,
  colorGray,
  colorDanger,
  colorSuccess,
  colorWarning,
  truncate,
  lineClamp,
  asChild,
  className,
  ...props
}: TypoProps) {
  const Comp = asChild ? Slot.Root : 'p'

  return (
    <Comp
      className={cn(
        typoWrapper({
          size,
          fontWeight,
          colorPrimary,
          colorGray,
          colorDanger,
          colorSuccess,
          colorWarning,
          truncate,
          lineClamp,
        }),
        className,
      )}
      {...props}
    />
  )
}
