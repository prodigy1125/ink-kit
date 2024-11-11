import React from "react";
import { classNames, variantClassNames } from "../../util/classes";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled = false,
  children,
  variant = "primary",
  size = "sm",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "ink-rounded-full ink-font-medium ink-transition-colors disabled:ink-cursor-not-allowed ink-duration-100",
        variantClassNames(variant, {
          primary:
            "ink-bg-primary ink-text-text-on-primary hover:ink-bg-primary-hover disabled:ink-bg-primary-disabled disabled:ink-text-text-on-primary-disabled active:ink-bg-primary-pressed",
          secondary:
            "ink-bg-secondary ink-text-text-on-secondary hover:ink-bg-secondary-hover disabled:ink-bg-secondary-disabled disabled:ink-text-text-on-secondary-disabled active:ink-bg-secondary-pressed",
        }),
        variantClassNames(size, {
          sm: "ink-px-6 ink-py-4 ink-text-sm ink-text-body-2",
          md: "ink-px-8 ink-py-4 ink-text-h4",
        }),
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
