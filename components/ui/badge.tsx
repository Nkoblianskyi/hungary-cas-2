import type * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"

  const variantClasses = {
    default: "border-transparent bg-yellow-400 text-black hover:bg-yellow-500",
    secondary: "border-transparent bg-gray-800 text-white hover:bg-gray-700",
    destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
    outline: "text-white border-current",
  }

  return <div className={cn(baseClasses, variantClasses[variant], className)} {...props} />
}

export { Badge }
