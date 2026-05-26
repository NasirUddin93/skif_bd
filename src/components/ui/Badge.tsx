import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-navy text-white hover:bg-navy/80",
        crimson:
          "border-transparent bg-crimson text-white hover:bg-crimson-dark",
        forest:
          "border-transparent bg-forest text-white hover:bg-forest-dark",
        gold:
          "border-transparent bg-gold text-navy hover:bg-gold-light",
        outline: "text-navy border border-navy hover:bg-surface",
        live: "border-transparent bg-crimson text-white animate-pulse-slow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
