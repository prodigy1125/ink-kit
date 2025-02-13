import React from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { Slot, Slottable } from "../Slot";
import { cva, type VariantProps } from "class-variance-authority";

export interface CardProps extends VariantProps<typeof cardVariants> {
  className?: string;
  children: React.ReactNode;
  image?: React.ReactNode;
  clickable?: boolean;
  asChild?: boolean;
}

const cardVariants = cva(
  `
ink:grid ink:grid-cols-1
ink:p-2 ink:pb-3 ink:sm:p-3 ink:gap-3
ink:relative 
ink:bg-background-container 
ink:font-default
ink:box-border
`,
  {
    variants: {
      variant: {
        default: "ink:bg-background-container",
        "light-purple": "ink:bg-ink-light-purple",
        secondary: "ink:bg-button-secondary",
      },
      imageLocation: {
        left: "ink:sm:grid-cols-2",
        right: "ink:sm:grid-cols-2",
        top: "ink:sm:grid-cols-1",
      },
      clickable: {
        true: "ink:cursor-pointer",
        false: "",
      },
      rounded: {
        lg: "ink:rounded-lg",
        xl: "ink:rounded-xl",
        xxl: "ink:rounded-xxl",
      },
    },
    compoundVariants: [
      {
        variant: "secondary",
        clickable: true,
        className: "ink:hover:bg-button-secondary-hover",
      },
    ],
    defaultVariants: {
      rounded: "xl",
    },
  }
);

export const Card: React.FC<CardProps> = ({
  children,
  className,
  image,
  imageLocation,
  asChild,
  variant,
  clickable,
  rounded,
}) => {
  const Component = asChild ? Slot : "div";
  const roundedValue = rounded || (image ? "xxl" : "lg");
  return (
    <Component
      className={classNames(
        cardVariants({
          variant,
          imageLocation: image ? imageLocation : undefined,
          clickable,
          rounded: roundedValue,
          className,
        }),
        className
      )}
      style={
        {
          "--ink-card-default-color":
            variant === "light-purple"
              ? "var(--ink-background-light)"
              : "var(--ink-text-default)",
          "--ink-card-muted-color":
            variant === "light-purple"
              ? "var(--ink-background-light)"
              : "var(--ink-text-muted)",
          "--ink-card-rounded": variantClassNames(roundedValue, {
            lg: "var(--ink-base-radius-sm)",
            xl: "var(--ink-base-radius-lg)",
            xxl: "var(--ink-base-radius-xl)",
          }),
        } as React.CSSProperties
      }
    >
      <Slottable child={children}>
        {(child) => (
          <>
            {image}
            <div
              className={classNames(
                "ink:flex ink:flex-col ink:gap-2 ink:sm:gap-6 ink:text-text-default ink:box-border",
                !!image && "ink:p-2 ink:sm:p-3",
                imageLocation === "right" && "ink:sm:-order-1",
                imageLocation !== "top" && !!image && "ink:sm:py-[100px]"
              )}
            >
              {child}
            </div>
          </>
        )}
      </Slottable>
    </Component>
  );
};
