import { cn } from '@/lib'
import { Icon } from '../icon'
import { featuredIconWrapper } from './featured-icon.var'
import type { FeaturedIconProps } from './types'

/**
 * FeaturedIcon component Props
 *
 * @param {FeaturedIconProps} props - Component properties
 *
 * @param {string} props.size  - default size = sm : xs, sm, md, lg, xl
 * @param {string} props.color - default color = primary :  primary, primaryDark, gray, grayDark, danger, dangerDark, warning, warningDark, success, successDark
 * @param {string} props.rounded - default rounded = full : none, sm, md, lg, full
 * @param {string} props.outline - default outline = false : true, false
 * @param {string} props.icon  - Icon only string or IconifyIcon
 *
 */

export function FeaturedIcon({
  size = 'sm',
  color = 'primary',
  rounded = 'full',
  outline = false,
  icon,
  className,
  ...props
}: FeaturedIconProps) {
  return (
    <span
      {...props}
      className={cn(
        featuredIconWrapper({ size, color, rounded, outline }),
        className,
      )}
    >
      <Icon size="full" stroke="sm" icon={icon} />
    </span>
  )
}
