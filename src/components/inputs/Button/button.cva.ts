import { cva } from "class-variance-authority";

export const cvaButton = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        plain: "text-black bg-white border border-gray-300 hover:bg-gray-50",

        primary: "bg-brand-primary hover:bg-brand-primary/90 text-white",
        secondary: "bg-brand-secondary hover:bg-brand-secondary/90 text-white",

        error: "bg-error hover:bg-error/90 text-white",
        success: "bg-success hover:bg-success/90 text-white",
        warning: "bg-warning hover:bg-warning/90 text-white",
        info: "bg-info hover:bg-info/90 text-white",
      },
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "plain",
      size: "md",
    },
  },
);
