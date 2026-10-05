import type { VariantProps } from 'class-variance-authority'
import type useEmblaCarousel from 'embla-carousel-react'
import type { UseEmblaCarouselType } from 'embla-carousel-react'

import type { Button } from '../button'
import type { carouselNextWrapper } from './components/next.var'
import type { carouselPreviousWrapper } from './components/previous.var'

export type CarouselApi = UseEmblaCarouselType[1]
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = UseCarouselParameters[0]
export type CarouselPlugin = UseCarouselParameters[1]

export type Props = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

export type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & Props

export type CarouselProps = React.ComponentProps<'div'> & Props

export type CarouselContentProps = React.HTMLAttributes<HTMLDivElement>

export type CarouselItemProps = React.HTMLAttributes<HTMLDivElement>

export type CarouselPreviousProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof carouselPreviousWrapper>

export type CarouselNextProps = React.ComponentProps<typeof Button> &
  VariantProps<typeof carouselNextWrapper>

export type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export type CarouselDotPropType = React.ComponentPropsWithRef<'button'>
