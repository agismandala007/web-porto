import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeMap = {
  yellow: 'bg-black text-[#F0DB4F]',
  react: 'bg-sunshade-50 text-[#448CAB]',
  blue: 'bg-sunshade-50 text-[#007ACC]',
  black: 'bg-sunshade-50 text-black',
  orange: 'bg-sunshade-50 text-[#F37726]',
  green: 'bg-sunshade-50 text-[#049688]',
  ginfizz: 'bg-sunshade-50 text-ginfizz-950',
  red: 'bg-sunshade-50 text-[#F44250]',
  php: 'bg-sunshade-50 text-[#777BB3]',
  dotnet: 'bg-sunshade-50 text-[#68217A]',
  csharp: 'bg-sunshade-50 text-[#623697]',
  indigo: 'bg-sunshade-50 text-[#130754]',
  blazor: 'bg-sunshade-50 text-[#512BD4]',
}

const BadgeVariant = cva(
  'inline-flex items-center rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors gap-1.5',
  {
    variants: {
      variant: {
        yellow: '',
        react: '',
        blue: '',
        black: '',
        orange: '',
        green: '',
        ginfizz: '',
        red: '',
        php: '',
        dotnet: '',
        csharp: '',
        indigo: '',
        blazor: '',
      },
    },
    compoundVariants: [
      { variant: 'yellow', className: badgeMap.yellow },
      { variant: 'react', className: badgeMap.react },
      { variant: 'blue', className: badgeMap.blue },
      { variant: 'black', className: badgeMap.black },
      { variant: 'orange', className: badgeMap.orange },
      { variant: 'green', className: badgeMap.green },
      { variant: 'ginfizz', className: badgeMap.ginfizz },
      { variant: 'red', className: badgeMap.red },
      { variant: 'php', className: badgeMap.php },
      { variant: 'dotnet', className: badgeMap.dotnet },
      { variant: 'csharp', className: badgeMap.csharp },
      { variant: 'indigo', className: badgeMap.indigo },
      { variant: 'blazor', className: badgeMap.blazor },
    ],
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BadgeVariant> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(BadgeVariant({ variant }), className)} {...props} />
}

export { Badge, BadgeVariant }
