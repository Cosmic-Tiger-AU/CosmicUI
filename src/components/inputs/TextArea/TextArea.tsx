"use client";

import * as React from "react";
import { cn } from "~/lib/cn";

type TextAreaProps = {
  label?: string;
  value?: string;
  error?: boolean;
  errorText?: string;
  onChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, size, error, errorText, ...props }, ref) => {
    // Use React's useId hook to generate a unique ID for the helper text
    const errorTextId = React.useId();

    return (
      <div>
        <textarea
          ref={ref}
          className={cn(
            "flex w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-danger ring-2 ring-danger",
            className,
          )}
          rows={4}
          aria-describedby={errorText ? errorTextId : undefined}
          {...props}
        />
        {error && errorText && (
          <p id={errorTextId} className="text-sm">
            {errorText}
          </p>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea, TextAreaProps };
