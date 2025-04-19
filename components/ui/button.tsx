import { cva, type VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const colorMap = {
  primary: 'bg-ginfizz-700 text-white ',
  secondary: 'bg-white text-brand-primary border border-primary',
  tertiary: 'text-brand-primary',
  link: 'text-brand-primary',
}

const buttonVariants = cva('text-md px-6 font-medium w-fit', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
      tertiary: '',
      link: '',
    },
    size: {
      lg: 'py-3 ',
      sm: 'py-2',
    },
    rounded: {
      full: 'rounded-full',
      default: 'rounded-lg',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      className: colorMap.primary,
    },
    {
      variant: 'secondary',
      className: colorMap.secondary,
    },
    {
      variant: 'tertiary',
      className: colorMap.tertiary,
    },
    {
      variant: 'link',
      className: colorMap.link,
    },
  ],
})

type ButtonProps = VariantProps<typeof buttonVariants> &
  Omit<React.ComponentProps<'button'>, 'size'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    type = 'button',
    className,
    variant = 'primary',
    size = 'lg',
    rounded = 'default',
    children,
    ...props
  },
  ref
) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      className={twMerge(buttonVariants({ variant, size, rounded }), className)}
      {...props}
    >
      {children}
    </button>
  )
})

export { Button, buttonVariants }
