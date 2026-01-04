import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-2xl",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground rounded-2xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-2xl shadow-soft",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        // Pawcation specific variants
        hero: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-elevated hover:shadow-glow hover:-translate-y-1 text-lg",
        "hero-secondary": "bg-card/80 backdrop-blur-sm text-foreground border-2 border-primary/20 hover:border-primary/40 hover:bg-card rounded-full shadow-soft hover:-translate-y-0.5",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-0.5",
        warm: "bg-warm text-warm-foreground hover:bg-warm/90 rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-0.5",
        paw: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-card hover:shadow-glow hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
        "icon-lg": "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
