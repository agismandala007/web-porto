import { cn } from "@/lib";
import { Icon, Spinner } from "@/ui";
import type { IconButtonProps } from "../types";
import { iconButtonWrapper } from "./icon-button.var";

/**
 * IconButton component Props
 *
 * @param {IconButtonProps} props - Component properties
 *
 * @param {string} props.icon  - Icon only string or IconifyIcon
 * @param {string} props.size  - default size md : xs, sm, md, lg, xl, 2xl
 * @param {string} props.rounded  - default rounded lg = 8px : none = 0px, sm = 4px, md = 6px, lg = 8px, xl = 12px, full = infinity
 * @param {string} props.variant  - default variant tertiary : primary, secondary, tertiary, link, linkGray, secondaryGray, tertiaryGray
 * @param {string} props.danger  - default danger false : true, false
 * @param {string} props.warning  - default warning false : true, false
 * @param {string} props.loading - default loading false : true, false
 * @param {string} props.className - Additional className to customize the icon link
 */

export function IconButton({
  type = "button",
  size = "md",
  variant = "primary",
  rounded = "lg",
  danger = false,
  warning = false,
  loading,
  className,
  icon,
  ...props
}: IconButtonProps) {
  const isVariantLink = ["link", "linkGray"].includes(variant ?? "link");

  return (
    <button
      type={type}
      className={cn(
        iconButtonWrapper({
          size,
          variant,
          rounded: isVariantLink ? "none" : rounded,
          danger,
          warning,
          loading,
          noPadding: isVariantLink,
        }),
        className,
      )}
      {...props}
    >
      {loading ? (
        <Spinner className="size-full" variant="secondary" />
      ) : (
        <Icon
          size="full"
          stroke={size === "2xs" ? "lg" : undefined}
          icon={icon}
        />
      )}
    </button>
  );
}
