import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  DotButton,
} from './components'

const carousel = Object.assign(Carousel, {
  Content: CarouselContent,
  Item: CarouselItem,
  Next: CarouselNext,
  Previous: CarouselPrevious,

  DotButton: DotButton,
})

export { carousel as Carousel }

export * from './context'
export * from './types'
