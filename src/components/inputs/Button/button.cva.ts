import { cva } from "class-variance-authority";

export const cvaButton = cva(
  "rounded-md uppercase transition-colors duration-100",
  {
    variants: {
      variant: {
        plain: "text-black bg-white border border-gray-300 hover:bg-gray-50",

        primary: "bg-brand hover:bg-brand-darker text-white",
        secondary: "bg-brand-alt hover:bg-brand-alt-darker text-white",

        error: "bg-error hover:bg-error-darker text-white",
        success: "bg-success hover:bg-success-darker text-white",
        warning: "bg-warning hover:bg-warning-darker text-white",
        info: "bg-info hover:bg-info-darker text-white",
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "plain",
      size: "md",
    },
  },
);
