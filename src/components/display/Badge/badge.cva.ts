import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        info: "border-transparent bg-info text-info-foreground",
        success: "border-transparent bg-success text-success-foreground",
        danger: "border-transparent bg-danger text-danger-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
