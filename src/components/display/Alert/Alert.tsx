import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "~/lib";
import { cvaAlert } from "./alert.cva";

type AlertProps = {
  icon?: FontAwesomeIconProps["icon"];
} & VariantProps<typeof cvaAlert>;

const getAlertIcon = (variant: VariantProps<typeof cvaAlert>["variant"]) => {
  switch (variant) {
    case "success":
      return faCircleCheck;
    case "warning":
      return faCircleExclamation;
    case "error":
      return faCircleXmark;
    default:
      return faCircleInfo;
  }
};

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertProps
>(({ className, variant, children, icon, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(cvaAlert({ variant }), className)}
    {...props}>
    <FontAwesomeIcon
      icon={icon ? icon : getAlertIcon(variant)}
      className="mr-2"
    />
    {children}
  </div>
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription, AlertTitle };
