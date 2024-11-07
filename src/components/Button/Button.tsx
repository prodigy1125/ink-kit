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
        "rounded font-medium transition-colors",
        {
          primary: "bg-blue-600 text-white hover:bg-blue-700",
          secondary: "bg-gray-600 text-white hover:bg-gray-700",
          outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
        }[variant],
        {
          small: "px-3 py-1 text-sm",
          medium: "px-4 py-2",
          large: "px-6 py-3 text-lg",
        }[size],
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
