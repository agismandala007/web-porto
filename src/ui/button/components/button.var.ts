import { cva } from 'class-variance-authority'

const colorButtonMap = {
  primary: {
    link: 'text-primary-700 hover:text-primary-800 focus:text-primary-700 disabled:text-gray-300',
    linkGray:
      'text-gray-700 hover:text-gray-800 focus:text-gray-800 disabled:text-gray-300',
    primary:
      '!bg-primary-700 hover:!bg-primary-800 focus:!bg-primary-700 disabled:!bg-primary-200 text-white',
    secondary:
      '!bg-primary-25 hover:!bg-primary-100 focus:!bg-primary-25 disabled:!bg-primary-25 text-primary-700 disabled:text-primary-300',
    secondaryGray:
      '!bg-white hover:!bg-gray-50 focus:!bg-white text-gray-700 ring-1 ring-gray-200 hover:text-gray-800 hover:ring-gray-300 focus:text-gray-700 focus:ring-gray-400 disabled:text-gray-300 disabled:ring-gray-200',
    tertiary: 'hover:!bg-primary-25 text-primary-700 disabled:text-gray-300',
    tertiaryGray:
      'hover:!bg-gray-50 text-gray-500 hover:text-gray-600 disabled:text-gray-300',
  },
  danger: {
    link: 'text-danger-700 hover:text-danger-800 focus:text-danger-700 disabled:text-danger-300',
    linkGray:
      'text-danger-700 hover:text-danger-800 focus:text-danger-800 disabled:text-danger-300',
    primary:
      '!bg-danger-600 hover:!bg-danger-700 focus:!bg-danger-600 disabled:!bg-danger-200 text-white',
    secondary:
      '!bg-danger-50 hover:!bg-danger-100 focus:!bg-danger-50 disabled:!bg-danger-25 text-danger-700 disabled:text-danger-300',
    secondaryGray:
      '!bg-white hover:!bg-danger-50 focus:!bg-white text-danger-700 ring-1 ring-danger-200 hover:text-danger-800 hover:ring-danger-300 focus:text-danger-700 focus:ring-danger-400 disabled:text-danger-300 disabled:ring-danger-200',
    tertiary: 'hover:!bg-danger-50 text-danger-700 disabled:text-danger-300',
    tertiaryGray:
      'hover:!bg-danger-50 text-danger-500 hover:text-danger-600 disabled:text-danger-300',
  },
  warning: {
    link: 'text-warning-700 hover:text-warning-800 focus:text-warning-700 disabled:text-warning-300',
    linkGray:
      'text-warning-700 hover:text-warning-800 focus:text-warning-800 disabled:text-warning-300',
    primary:
      '!bg-warning-600 hover:!bg-warning-700 focus:!bg-warning-600 disabled:!bg-warning-200 text-white',
    secondary:
      '!bg-warning-50 hover:!bg-warning-100 focus:!bg-warning-50 disabled:!bg-warning-25 text-warning-700 disabled:text-warning-300',
    secondaryGray:
      '!bg-white hover:!bg-warning-50 focus:!bg-white text-warning-700 ring-1 ring-warning-200 hover:text-warning-800 hover:ring-warning-300 focus:text-warning-700 focus:ring-warning-400 disabled:text-warning-300 disabled:ring-warning-200',
    tertiary: 'hover:!bg-warning-50 text-warning-700 disabled:text-warning-300',
    tertiaryGray:
      'hover:!bg-warning-50 text-warning-500 hover:text-warning-600 disabled:text-warning-300',
  },
}

const sizeButtonMap = {
  withPadding: {
    '2xs':
      'h-[1.75rem] min-w-[1.75rem] gap-x-2 px-[0.75rem] text-2xs leading-[1.75rem]',
    xs: 'h-[2rem] min-w-[2rem] gap-x-2 px-[0.875rem] text-xs leading-[2rem]',
    sm: 'h-[2.25rem] min-w-[2.25rem] gap-x-2 px-[0.875rem] text-sm leading-[2.25rem]',
    md: 'h-[2.5rem] min-w-[2.5rem] gap-x-2 px-[1rem] text-sm leading-[2.5rem]',
    lg: 'h-[2.75rem] min-w-[2.75rem] gap-x-2 px-[1.125rem] text-base leading-[2.75rem]',
    xl: 'h-[3rem] min-w-[3rem] gap-x-2 px-[1.25rem] text-base leading-[3rem]',
    '2xl':
      'h-[3.75rem] min-w-[3.75rem] gap-x-3 px-[1.75rem] text-lg leading-[3.75rem]',
  },
  noPadding: {
    '2xs': 'gap-x-2 text-2xs leading-4',
    xs: 'gap-x-2 text-xs leading-4',
    sm: 'gap-x-2 text-sm',
    md: 'gap-x-2 text-sm',
    lg: 'gap-x-2 text-base',
    xl: 'gap-x-2 text-base',
    '2xl': 'gap-x-3 text-lg',
  },
}

export const buttonWrapper = cva(
  'relative inline-flex shrink cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap outline outline-transparent focus:outline-0 focus:outline-transparent disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        '2xs': '',
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
        '2xl': '',
      },
      danger: {
        true: '',
        false: '',
      },
      warning: {
        true: '',
        false: '',
      },
      variant: {
        primary: '',
        secondary: '',
        tertiary: '',
        link: '',
        linkGray: '',
        secondaryGray: '',
        tertiaryGray: '',
      },
      wider: {
        none: '',
        sm: 'px-3!',
        md: 'px-6!',
        lg: 'px-9!',
        xl: 'px-12!',
        full: 'w-full!',
        fit: 'w-fit',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      fontWeight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      noPadding: {
        true: '',
        false: '',
      },
      loading: {
        true: 'relative cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      // variant primary
      {
        danger: false,
        warning: false,
        variant: 'primary',
        className: colorButtonMap.primary.primary,
      },
      {
        danger: false,
        warning: false,
        variant: 'secondary',
        className: colorButtonMap.primary.secondary,
      },
      {
        danger: false,
        warning: false,
        variant: 'tertiary',
        className: colorButtonMap.primary.tertiary,
      },
      {
        danger: false,
        warning: false,
        variant: 'link',
        className: colorButtonMap.primary.link,
      },
      {
        danger: false,
        warning: false,
        variant: 'linkGray',
        className: colorButtonMap.primary.linkGray,
      },
      {
        danger: false,
        warning: false,
        variant: 'secondaryGray',
        className: colorButtonMap.primary.secondaryGray,
      },
      {
        danger: false,
        warning: false,
        variant: 'tertiaryGray',
        className: colorButtonMap.primary.tertiaryGray,
      },
      // variant danger
      {
        danger: true,
        warning: false,
        variant: 'primary',
        className: colorButtonMap.danger.primary,
      },
      {
        danger: true,
        warning: false,
        variant: 'secondary',
        className: colorButtonMap.danger.secondary,
      },
      {
        danger: true,
        warning: false,
        variant: 'tertiary',
        className: colorButtonMap.danger.tertiary,
      },
      {
        danger: true,
        warning: false,
        variant: 'link',
        className: colorButtonMap.danger.link,
      },
      {
        danger: true,
        warning: false,
        variant: 'linkGray',
        className: colorButtonMap.danger.linkGray,
      },
      {
        danger: true,
        warning: false,
        variant: 'secondaryGray',
        className: colorButtonMap.danger.secondaryGray,
      },
      {
        danger: true,
        warning: false,
        variant: 'tertiaryGray',
        className: colorButtonMap.danger.tertiaryGray,
      },
      // variant warning
      {
        danger: false,
        warning: true,
        variant: 'primary',
        className: colorButtonMap.warning.primary,
      },
      {
        danger: false,
        warning: true,
        variant: 'secondary',
        className: colorButtonMap.warning.secondary,
      },
      {
        danger: false,
        warning: true,
        variant: 'tertiary',
        className: colorButtonMap.warning.tertiary,
      },
      {
        danger: false,
        warning: true,
        variant: 'link',
        className: colorButtonMap.warning.link,
      },
      {
        danger: false,
        warning: true,
        variant: 'linkGray',
        className: colorButtonMap.warning.linkGray,
      },
      {
        danger: false,
        warning: true,
        variant: 'secondaryGray',
        className: colorButtonMap.warning.secondaryGray,
      },
      {
        danger: false,
        warning: true,
        variant: 'tertiaryGray',
        className: colorButtonMap.warning.tertiaryGray,
      },
      {
        noPadding: true,
        size: '2xs',
        className: sizeButtonMap.noPadding['2xs'],
      },
      {
        noPadding: true,
        size: 'xs',
        className: sizeButtonMap.noPadding.xs,
      },
      {
        noPadding: true,
        size: 'sm',
        className: sizeButtonMap.noPadding.sm,
      },
      {
        noPadding: true,
        size: 'md',
        className: sizeButtonMap.noPadding.md,
      },
      {
        noPadding: true,
        size: 'lg',
        className: sizeButtonMap.noPadding.lg,
      },
      {
        noPadding: true,
        size: 'xl',
        className: sizeButtonMap.noPadding.xl,
      },
      {
        noPadding: true,
        size: '2xl',
        className: sizeButtonMap.noPadding['2xl'],
      },
      {
        noPadding: false,
        size: '2xs',
        className: sizeButtonMap.withPadding['2xs'],
      },
      {
        noPadding: false,
        size: 'xs',
        className: sizeButtonMap.withPadding.xs,
      },
      {
        noPadding: false,
        size: 'sm',
        className: sizeButtonMap.withPadding.sm,
      },
      {
        noPadding: false,
        size: 'md',
        className: sizeButtonMap.withPadding.md,
      },
      {
        noPadding: false,
        size: 'lg',
        className: sizeButtonMap.withPadding.lg,
      },
      {
        noPadding: false,
        size: 'xl',
        className: sizeButtonMap.withPadding.xl,
      },
      {
        noPadding: false,
        size: '2xl',
        className: sizeButtonMap.withPadding['2xl'],
      },
    ],
  },
)

export const buttonIconWrapper = cva('flex items-center justify-center', {
  variants: {
    size: {
      '2xs': 'size-3',
      xs: 'size-4',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-5',
      xl: 'size-5',
      '2xl': 'size-6',
    },
  },
})
