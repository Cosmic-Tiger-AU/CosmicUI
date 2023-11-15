import * as React from "react";
import { cn } from "~/utils/cn";

type TextBoxProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn("w-full rounded-md border p-2", className)}
        {...props}
      />
    );
  },
);

TextBox.displayName = "TextBox";

export { TextBox, TextBoxProps };
