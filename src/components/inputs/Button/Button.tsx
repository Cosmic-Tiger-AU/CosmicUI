"use client";

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/lib/cn";
import { cvaButton } from "./button.cva";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: FontAwesomeIconProps["icon"];
  iconPosition?: "left" | "right";
  asChild?: boolean;
} & VariantProps<typeof cvaButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          cvaButton({ variant, size, className }),
          "flex items-center justify-center",
          className,
        )}
        ref={ref}
        {...props}>
        {icon && iconPosition === "left" && (
          <FontAwesomeIcon icon={icon} className="mr-2" />
        )}
        <span className="uppercase">{children}</span>
        {icon && iconPosition === "right" && (
          <span className="ml-2">
            <FontAwesomeIcon icon={icon} />
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, ButtonProps };
