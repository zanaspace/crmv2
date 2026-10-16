import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge as BadgePrimitive } from "@/components/ui/primitives/badge"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "info" | "pick" | "secondary" | "muted";
}

const VARIANTS: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-[var(--primary)] text-[var(--primary-foreground)]",
  success: "bg-[var(--ok-s)] text-[var(--ok)]",
  warning: "bg-[var(--warn-s)] text-[var(--warn)]",
  destructive: "bg-[var(--bad-s)] text-[var(--bad)]",
  info: "bg-[var(--info-s)] text-[var(--info)]",
  /** Tier / qualified / demo (style guide: specialized state). */
  pick: "bg-[var(--pick-s)] text-[var(--pick)]",
  secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
  muted: "bg-[var(--muted)] text-[var(--muted-foreground)]",
};

/** CRM status pill on the shadcn/ui badge primitive (still renders a `<div>`, as before). */
function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <BadgePrimitive
      asChild
      variant={null}
      // Classes go on the primitive so tailwind-merge resolves conflicts; Slot only concatenates child classes.
      className={cn(
        // Undo primitive defaults the CRM pill never had.
        "w-auto shrink gap-0 overflow-visible whitespace-normal border-0",
        "inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold font-heading uppercase tracking-[0.02em] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
        VARIANTS[variant],
        className
      )}
    >
      <div data-variant={variant} {...props} />
    </BadgePrimitive>
  )
}

export { Badge }
