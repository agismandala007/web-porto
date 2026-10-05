import { cva } from 'class-variance-authority'

export const imageWrapper = cva('relative flex shrink-0 overflow-hidden', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    },
  },
})

export const imageImage = cva('size-full', {
  variants: {
    fit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
      scaleDown: 'object-scale-down',
    },
  },
})
