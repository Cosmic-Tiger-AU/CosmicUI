import { cva } from "class-variance-authority";

const cvaAlert = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        error:
          "border-danger/50 text-danger-foreground dark:border-danger [&>svg]:text-danger",
        warning:
          "border-warning/75 text-warning dark:border-warning [&>svg]:bg-warning",
        info: "border-info/75 dark:border-info text-info [&>svg]:text-info",
        success: "border-success text-success [&>svg]:text-success",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export { cvaAlert };
