import { cva } from 'class-variance-authority'

const sizeFeaturedIconMap = {
  withOutline: {
    xs: 'size-6 p-1.5 outline-2',
    sm: 'size-8 p-2 outline-4',
    md: 'size-10 p-2.5 outline-6',
    lg: 'size-12 p-3 outline-8',
    xl: 'size-14 p-3.5 outline-[10px]',
    '2xl': 'size-16 p-4 outline-[12px]',
    '3xl': 'size-[73.15px] p-4.5 outline-[12px]',
  },
  withoutOutline: {
    xs: 'size-6 p-1',
    sm: 'size-8 p-1.5',
    md: 'size-10 p-2.5',
    lg: 'size-12 p-3',
    xl: 'size-14 p-3.5',
    '2xl': 'size-16 p-4',
    '3xl': 'size-[73.15px] p-4.5',
    '4xl': 'size-[112px] p-7',
  },
}

export const featuredIconWrapper = cva(
  '-outline-offset-1 inline-flex shrink-0 items-center justify-center',
  {
    variants: {
      size: {
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
        '2xl': '',
        '3xl': '',
        '4xl': '',
      },
      color: {
        primary: 'bg-primary-25 text-primary-600 outline-primary-50/50',
        primaryDark: 'bg-primary-800 text-white outline-primary-600',
        gray: 'bg-gray-100 text-gray-600 outline-gray-50/50',
        grayDark: 'bg-gray-500 text-white outline-gray-600',
        danger: 'bg-danger-50 text-danger-600 outline-danger-50/50',
        dangerDark: 'bg-danger-500 text-white outline-danger-600',
        warning: 'bg-warning-50 text-warning-600 outline-warning-50/50',
        warningDark: 'bg-warning-500 text-white outline-warning-600',
        success: 'bg-success-50 text-success-600 outline-success-50/50',
        successDark: 'bg-success-500 text-white outline-success-600',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      outline: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        outline: true,
        class: sizeFeaturedIconMap.withOutline.xs,
      },
      {
        size: 'sm',
        outline: true,
        class: sizeFeaturedIconMap.withOutline.sm,
      },
      {
        size: 'md',
        outline: true,
        class: sizeFeaturedIconMap.withOutline.md,
      },
      {
        size: 'lg',
        outline: true,
        class: sizeFeaturedIconMap.withOutline.lg,
      },
      {
        size: 'xl',
        outline: true,
        class: sizeFeaturedIconMap.withOutline.xl,
      },
      {
        size: '2xl',
        outline: true,
        class: sizeFeaturedIconMap.withOutline['2xl'],
      },
      {
        size: '3xl',
        outline: true,
        class: sizeFeaturedIconMap.withOutline['3xl'],
      },
      {
        size: 'xs',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline.xs,
      },
      {
        size: 'sm',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline.sm,
      },
      {
        size: 'md',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline.md,
      },
      {
        size: 'lg',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline.lg,
      },
      {
        size: 'xl',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline.xl,
      },
      {
        size: '2xl',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline['2xl'],
      },
      {
        size: '3xl',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline['3xl'],
      },
      {
        size: '4xl',
        outline: false,
        class: sizeFeaturedIconMap.withoutOutline['4xl'],
      },
    ],
  },
)
