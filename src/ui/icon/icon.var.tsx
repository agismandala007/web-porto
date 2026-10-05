import { cva } from 'class-variance-authority'

export const iconWrapper = cva('shrink-0 p-px', {
  variants: {
    size: {
      '2xs': 'size-3',
      xs: 'size-3.5',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-8',
      '2xl': 'size-12',
      '3xl': 'size-16',
      full: 'size-full',
    },
    stroke: {
      xs: '[&>g]:stroke-[1px] [&>path]:stroke-[1px]',
      sm: '[&>g]:stroke-[1.5px] [&>path]:stroke-[1.5px]',
      md: '[&>g]:stroke-[2px] [&>path]:stroke-[2px]',
      lg: '[&>g]:stroke-[2.5px] [&>path]:stroke-[2.5px]',
    },
  },
})
