import * as React from "react";
import { ButtonProps } from "./Button.types";
import { cn } from "../../../utils/cn";

// Button forward ref

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;

    return (
      <button {...rest} ref={ref} className={cn(className, "dark:text-white")}>
        {children}
      </button>
    );
  },
);
