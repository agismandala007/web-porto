import { cva } from 'class-variance-authority'

export const carouselPreviousWrapper = cva([
  'absolute size-[42px] rounded-full border border-border-primary bg-background-white shadow-sm hover:bg-accent hover:text-accent-foreground',
])
