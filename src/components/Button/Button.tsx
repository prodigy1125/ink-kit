import React, { PropsWithChildren } from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { Slot, Slottable } from "../Slot/Slot";

export interface ButtonProps
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "default";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  asChild,
  className,
  children,
  variant = "primary",
  size = "sm",
  rounded = "default",
  iconLeft,
  iconRight,
  ...restProps
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={classNames(
        "ink:rounded-full ink:font-default ink:transition-colors ink:hover:cursor-pointer ink:disabled:cursor-not-allowed ink:duration-100 ink:box-border",
        "ink:flex ink:items-center ink:justify-center ink:gap-1 ink:select-none ink:no-underline",
        variantClassNames(size, {
          sm: "ink:px-2 ink:py-1.5 ink:text-body-2-bold ink:h-5",
          md: "ink:px-3 ink:py-2 ink:text-body-2-bold ink:h-6",
          lg: "ink:px-4 ink:py-3 ink:text-h4 ink:h-8",
        }),
        variantClassNames(rounded, {
          full: `ink:rounded-full ${variantClassNames(size, {
            sm: "ink:p-1 ink:size-5",
            md: "ink:p-1.5 ink:size-6",
            lg: "ink:p-2 ink:size-8",
          })}`,
          default: "",
        }),
        variantClassNames(variant, {
          primary:
            "ink:bg-button-primary ink:text-text-on-primary ink:hover:bg-button-primary-hover ink:disabled:bg-button-primary-disabled ink:disabled:text-text-on-primary-disabled ink:active:bg-button-primary-pressed",
          secondary:
            "ink:bg-button-secondary ink:text-text-on-secondary ink:hover:bg-button-secondary-hover ink:disabled:bg-button-secondary-disabled ink:disabled:text-text-on-secondary-disabled ink:active:bg-button-secondary-pressed",
        }),
        className
      )}
      {...restProps}
    >
      <Slottable child={children}>
        {(child) => (
          <>
            {iconLeft && <div className="ink:size-3 ink:-my-1">{iconLeft}</div>}
            {child}
            {iconRight && (
              <div className="ink:size-3 ink:-my-1">{iconRight}</div>
            )}
          </>
        )}
      </Slottable>
    </Component>
  );
};
