import { ImageFallback, ImageUi } from './components'

export * from './types'

const image = Object.assign(ImageUi, {
  Fallback: ImageFallback,
})

export { image as Image }
