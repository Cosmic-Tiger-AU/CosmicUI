import { cva } from "class-variance-authority";

export const cvaTextBox = cva(
  "h-10 w-full rounded-md border dark:bg-neutral-900 border-gray-300 px-3 py-2 text-sm  disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
