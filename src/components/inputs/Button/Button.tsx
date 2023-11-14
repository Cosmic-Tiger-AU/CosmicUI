import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import * as React from "react";
import { cn } from "../../../utils/cn";
import { VariantProps } from "class-variance-authority";
import { cvaButton } from "./button.cva";

export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: FontAwesomeIconProps["icon"];
  iconPosition?: "left" | "right";
} & VariantProps<typeof cvaButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      icon,
      iconPosition = "right",
      variant,
      size,
      ...rest
    } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(
          cvaButton({ variant, size }),
          "flex items-center justify-center",
          className,
        )}>
        {icon && iconPosition === "left" && (
          <FontAwesomeIcon icon={icon} className="mr-2" />
        )}
        <span className="uppercase">{children}</span>
        {icon && iconPosition === "right" && (
          <span className="ml-2">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
