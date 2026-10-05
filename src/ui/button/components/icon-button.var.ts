import { cva } from 'class-variance-authority'

const colorIconButtonMap = {
  primary: {
    link: 'text-primary-700 hover:text-primary-800 focus:text-primary-700 disabled:text-gray-300',
    linkGray:
      'text-gray-700 hover:text-gray-800 focus:text-gray-800 disabled:text-gray-300',
    primary:
      '!bg-primary-600 hover:!bg-primary-700 focus:!bg-primary-600 disabled:!bg-primary-200 text-white',
    secondary:
      '!bg-primary-25 hover:!bg-primary-100 focus:!bg-primary-25 disabled:!bg-primary-25 text-primary-700 disabled:text-primary-300',
    secondaryGray:
      '!bg-white hover:!bg-gray-50 focus:!bg-white text-gray-700 ring-1 ring-gray-200 hover:text-gray-800 hover:ring-gray-300 focus:text-gray-700 focus:ring-gray-400 disabled:text-gray-300 disabled:ring-gray-200',
    tertiary:
      'hover:!bg-primary-25 text-primary-700 disabled:text-gray-300 data-[status=active]:text-primary-700 data-[status=active]:bg-primary-25',
    tertiaryGray:
      'hover:!bg-gray-50 text-gray-500 hover:text-gray-600 disabled:text-gray-300 data-[status=active]:!text-primary-700 data-[status=active]:bg-primary-25 ',
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

const sizeIconLinkMap = {
  withPadding: {
    '2xs': '!size-[1.5rem] p-1',
    xs: '!size-[1.875rem] p-1.5',
    sm: '!size-[2.25rem] p-2',
    md: '!size-[2.5rem] p-2.5',
    lg: '!size-[2.75rem] p-3',
    xl: '!size-[3rem] p-3.5',
    '2xl': '!size-[3.5rem] p-4',
  },
  noPadding: {
    '2xs': '!size-3',
    xs: '!size-4',
    sm: '!size-5',
    md: '!size-6',
    lg: '!size-8',
    xl: '!size-12',
    '2xl': '!size-16',
  },
}

export const iconButtonWrapper = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap outline outline-transparent focus:outline-0 focus:outline-transparent disabled:cursor-not-allowed',
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
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      noPadding: {
        true: '',
        false: '',
      },
      loading: {
        true: 'cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      // variant primary
      {
        danger: false,
        warning: false,
        variant: 'primary',
        className: colorIconButtonMap.primary.primary,
      },
      {
        danger: false,
        warning: false,
        variant: 'secondary',
        className: colorIconButtonMap.primary.secondary,
      },
      {
        danger: false,
        warning: false,
        variant: 'tertiary',
        className: colorIconButtonMap.primary.tertiary,
      },
      {
        danger: false,
        warning: false,
        variant: 'link',
        className: colorIconButtonMap.primary.link,
      },
      {
        danger: false,
        warning: false,
        variant: 'linkGray',
        className: colorIconButtonMap.primary.linkGray,
      },
      {
        danger: false,
        warning: false,
        variant: 'secondaryGray',
        className: colorIconButtonMap.primary.secondaryGray,
      },
      {
        danger: false,
        warning: false,
        variant: 'tertiaryGray',
        className: colorIconButtonMap.primary.tertiaryGray,
      },
      // variant danger
      {
        danger: true,
        warning: false,
        variant: 'primary',
        className: colorIconButtonMap.danger.primary,
      },
      {
        danger: true,
        warning: false,
        variant: 'secondary',
        className: colorIconButtonMap.danger.secondary,
      },
      {
        danger: true,
        warning: false,
        variant: 'tertiary',
        className: colorIconButtonMap.danger.tertiary,
      },
      {
        danger: true,
        warning: false,
        variant: 'link',
        className: colorIconButtonMap.danger.link,
      },
      {
        danger: true,
        warning: false,
        variant: 'linkGray',
        className: colorIconButtonMap.danger.linkGray,
      },
      {
        danger: true,
        warning: false,
        variant: 'secondaryGray',
        className: colorIconButtonMap.danger.secondaryGray,
      },
      {
        danger: true,
        warning: false,
        variant: 'tertiaryGray',
        className: colorIconButtonMap.danger.tertiaryGray,
      },
      // variant warning
      {
        danger: false,
        warning: true,
        variant: 'primary',
        className: colorIconButtonMap.warning.primary,
      },
      {
        danger: false,
        warning: true,
        variant: 'secondary',
        className: colorIconButtonMap.warning.secondary,
      },
      {
        danger: false,
        warning: true,
        variant: 'tertiary',
        className: colorIconButtonMap.warning.tertiary,
      },
      {
        danger: false,
        warning: true,
        variant: 'link',
        className: colorIconButtonMap.warning.link,
      },
      {
        danger: false,
        warning: true,
        variant: 'linkGray',
        className: colorIconButtonMap.warning.linkGray,
      },
      {
        danger: false,
        warning: true,
        variant: 'secondaryGray',
        className: colorIconButtonMap.warning.secondaryGray,
      },
      {
        danger: false,
        warning: true,
        variant: 'tertiaryGray',
        className: colorIconButtonMap.warning.tertiaryGray,
      },
      // size with padding
      {
        noPadding: false,
        size: '2xs',
        className: sizeIconLinkMap.withPadding['2xs'],
      },
      {
        noPadding: false,
        size: 'xs',
        className: sizeIconLinkMap.withPadding.xs,
      },
      {
        noPadding: false,
        size: 'sm',
        className: sizeIconLinkMap.withPadding.sm,
      },
      {
        noPadding: false,
        size: 'md',
        className: sizeIconLinkMap.withPadding.md,
      },
      {
        noPadding: false,
        size: 'lg',
        className: sizeIconLinkMap.withPadding.lg,
      },
      {
        noPadding: false,
        size: 'xl',
        className: sizeIconLinkMap.withPadding.xl,
      },
      {
        noPadding: false,
        size: '2xl',
        className: sizeIconLinkMap.withPadding['2xl'],
      },
      // size no padding
      {
        noPadding: true,
        size: '2xs',
        className: sizeIconLinkMap.noPadding['2xs'],
      },
      {
        noPadding: true,
        size: 'xs',
        className: sizeIconLinkMap.noPadding.xs,
      },
      {
        noPadding: true,
        size: 'sm',
        className: sizeIconLinkMap.noPadding.sm,
      },
      {
        noPadding: true,
        size: 'md',
        className: sizeIconLinkMap.noPadding.md,
      },
      {
        noPadding: true,
        size: 'lg',
        className: sizeIconLinkMap.noPadding.lg,
      },
      {
        noPadding: true,
        size: 'xl',
        className: sizeIconLinkMap.noPadding.xl,
      },
      {
        noPadding: true,
        size: '2xl',
        className: sizeIconLinkMap.noPadding['2xl'],
      },
    ],
  },
)
