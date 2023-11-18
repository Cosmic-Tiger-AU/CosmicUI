"use client";

import { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/lib/cn";
import { cvaTextBox } from "./textbox.cva";

type TextBoxProps = {
  label?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (value: string) => void;
} & VariantProps<typeof cvaTextBox> &
  React.InputHTMLAttributes<HTMLInputElement>;

// * Change focus ring color and remove focus border, but keep focus ring

const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  ({ className, size, error, helperText, ...props }, ref) => {
    // Use React's useId hook to generate a unique ID for the helper text
    const helperTextId = React.useId();

    return (
      <div>
        <input
          ref={ref}
          className={cn(cvaTextBox({ size }), className)}
          aria-describedby={helperText ? helperTextId : undefined}
          {...props}
        />
        {helperText && (
          <div id={helperTextId} className="helper-text">
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

TextBox.displayName = "TextBox";

export { TextBox, TextBoxProps };
