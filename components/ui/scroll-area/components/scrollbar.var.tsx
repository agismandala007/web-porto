import { cva } from 'class-variance-authority'

export const scrollBarWrapper = cva(
  'relative z-2 flex touch-none select-none transition-colors',
  {
    variants: {
      orientation: {
        vertical: 'h-full w-1.5 border-l border-l-transparent p-[1px]',
        horizontal: 'h-1.5 flex-col border-t border-t-transparent p-[1px]',
      },
    },
  },
)

export const scrollBarThumb = cva('relative flex-1 rounded-full bg-gray-300')
