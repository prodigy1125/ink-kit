import React from "react";
import { classNames } from "../../util/classes";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled = false,
  children,
  variant = "primary",
  size = "medium",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "ink-rounded ink-font-medium ink-transition-colors",
        {
          primary: "ink-bg-primary ink-text-white hover:ink-bg-primary/80",
          secondary: "ink-bg-gray-600 ink-text-white hover:ink-bg-gray-700",
          outline:
            "ink-border-2 ink-border-blue-600 ink-text-blue-600 hover:ink-bg-blue-50",
        }[variant],
        {
          small: "ink-px-3 ink-py-1 ink-text-sm",
          medium: "ink-px-4 ink-py-2",
          large: "ink-px-6 ink-py-3 ink-text-lg",
        }[size],
        disabled ? "ink-opacity-50 ink-cursor-not-allowed" : "",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
