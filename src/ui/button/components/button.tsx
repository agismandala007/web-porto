'use client'

import { cn } from '@/lib'

import { Icon, Spinner } from '@/ui'
import type { ButtonProps } from '../types'
import { buttonIconWrapper, buttonWrapper } from './button.var'

/**
 * Button component Props
 *
 * @param {ButtonProps} props - Component properties
 *
 * @param {string} props.size  - default size md : xs, sm, md, lg, xl, 2xl
 * @param {string} props.wider  - default wider fit : none, sm, md, lg, xl, full, fit
 * @param {string} props.rounded  - default rounded lg = 8px : none = 0px, sm = 4px, md = 6px, lg = 8px, xl = 12px, full = infinity
 * @param {string} props.variant  - default variant tertiary : primary, secondary, tertiary, link, linkGray, secondaryGray, tertiaryGray
 * @param {string} props.danger  - default danger false : true, false
 * @param {string} props.warning  - default warning false : true, false
 * @param {string} props.fontWeight  - default fontWeight semibold : normal, medium, semibold, bold
 * @param {string} props.startIcon  - The icon to display at the start of the link
 * @param {string} props.endIcon  - The icon to display at the end of the link
 * @param {string} props.loading - default loading false : true, false
 * @param {string} props.className - Additional className to customize the icon link
 */

export function Button({
  type = 'button',
  size = 'md',
  variant = 'primary',
  fontWeight = 'semibold',
  rounded = 'lg',
  danger = false,
  warning = false,
  wider = 'fit',
  className,
  startIcon,
  endIcon,
  loading,
  disabled,
  onClick,
  i18nKey,
  children,
  ...props
}: ButtonProps) {
  const isVariantLink = ['link', 'linkGray'].includes(variant ?? 'link')

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) return
    onClick?.(e)
  }

  return (
    <button
      type={type}
      onClick={onClickButton}
      disabled={loading || disabled}
      className={cn(
        buttonWrapper({
          size,
          variant,
          fontWeight,
          rounded: isVariantLink ? 'none' : rounded,
          danger,
          warning,
          wider,
          loading,
          noPadding: isVariantLink,
        }),
        className,
      )}
      {...props}
    >
      {startIcon && (
        <span className={buttonIconWrapper({ size })}>
          {loading ? (
            <Spinner variant="secondary" />
          ) : (
            <Icon size="full" icon={startIcon} />
          )}
        </span>
      )}
      {loading && !endIcon && !startIcon ? (
        <>
          <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform">
            <Spinner />
          </span>
          <span className="invisible">{children}</span>
        </>
      ) : (
        children
      )}
      {endIcon && (
        <span className={buttonIconWrapper({ size })}>
          {loading ? (
            <Spinner variant="secondary" />
          ) : (
            <Icon size="full" icon={endIcon} />
          )}
        </span>
      )}
    </button>
  )
}
