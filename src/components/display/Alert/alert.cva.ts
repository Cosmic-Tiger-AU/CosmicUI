import { cva } from "class-variance-authority";

const cvaAlert = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        error:
          "border-danger/50 text-danger dark:border-danger [&>svg]:text-danger",
        warning: "border-orange-500/75 text-orange-500 [&>svg]:text-orange-500",
        info: "border-blue-500/75 text-blue-500 [&>svg]:text-blue-500",
        success: "border-green-500/75 text-green-500 [&>svg]:text-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export { cvaAlert };
