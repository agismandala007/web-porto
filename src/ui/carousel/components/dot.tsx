import type { CarouselDotPropType } from '../types'

export const DotButton: React.FC<CarouselDotPropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
