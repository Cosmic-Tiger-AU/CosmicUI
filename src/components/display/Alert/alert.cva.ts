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
          "border-warning/75 text-warning-foreground [&>svg]:bg-warning-foreground",
        info: "border-info/75 text-info-foreground [&>svg]:text-info",
        success:
          "border-success/75 text-success-foreground [&>svg]:text-success-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export { cvaAlert };
