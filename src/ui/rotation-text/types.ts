import type {
  LegacyAnimationControls,
  motion,
  Target,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion'
import type React from 'react'

export interface RotatingTextRef {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    'children' | 'transition' | 'initial' | 'animate' | 'exit'
  > {
  texts: string[]
  transition?: Transition
  initial?: boolean | Target | VariantLabels
  animate?:
    | boolean
    | VariantLabels
    | LegacyAnimationControls
    | TargetAndTransition
  exit?: Target | VariantLabels
  animatePresenceMode?: 'sync' | 'wait'
  animatePresenceInitial?: boolean
  rotationInterval?: number
  staggerDuration?: number
  staggerFrom?: 'first' | 'last' | 'center' | 'random' | number
  loop?: boolean
  auto?: boolean
  splitBy?: string
  onNext?: (index: number) => void
  mainClassName?: string
  splitLevelClassName?: string
  elementLevelClassName?: string
}
