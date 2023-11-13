import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import * as React from "react";
import { cn } from "../../../utils/cn";

export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: FontAwesomeIconProps["icon"];
  iconPosition?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      className,
      icon,
      iconPosition = "right",
      ...rest
    } = props;

    return (
      <button {...rest} ref={ref} className={cn(className, "dark:text-white")}>
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
