import { classNames, variantClassNames } from "../../util/classes";
import { Slot, Slottable } from "../Slot";
import { ButtonProps } from "./Button";

import { Button } from "./Button";

export type InternalButtonProps = Omit<ButtonProps, "variant" | "size"> &
  InternalButtonOwnProps;

export type InternalButtonVariant = "wallet" | "wallet-inside";

export interface InternalButtonOwnProps {
  variant: InternalButtonVariant | ButtonProps["variant"];
}

export const InternalButton: React.FC<InternalButtonProps> = ({
  children,
  className,
  variant,
  iconLeft,
  asChild,
  ...props
}) => {
  const Component = asChild ? Slot : Button;
  return (
    <Component
      className={classNames(
        variantClassNames(variant as InternalButtonVariant, {
          wallet:
            "ink:bg-background-light-transparent ink:pl-1 ink:pr-1.5 ink:py-2 ink:text-body-2-bold ink:text-text-default ink:hover:bg-background-light ink:disabled:bg-background-light-transparent-disabled ink:disabled:text-muted ink:active:bg-background-light",
          "wallet-inside":
            "ink:bg-background-light-invisible ink:px-1.5 ink:py-2 ink:rounded-xs ink:text-body-2-bold ink:text-text-default ink:hover:bg-background-container ink:disabled:bg-background-light-transparent-disabled ink:disabled:text-muted ink:active:bg-background-light",
        }),
        className
      )}
      size="md"
      variant={
        variant === "primary" || variant === "secondary" ? variant : undefined
      }
      {...props}
    >
      <Slottable child={children}>
        {(child) => (
          <div
            className={classNames(
              "ink:w-full ink:flex-1 ink:flex ink:items-center ink:gap-1.5",
              variantClassNames(variant as InternalButtonVariant, {
                wallet: "ink:justify-center",
                "wallet-inside": "ink:justify-start",
              })
            )}
          >
            {iconLeft && (
              <div
                className={classNames(
                  "ink:flex ink:items-center ink:justify-center",
                  variantClassNames(variant as InternalButtonVariant, {
                    wallet: "ink:size-4",
                    "wallet-inside": "ink:size-3",
                  })
                )}
              >
                <div
                  className={classNames(
                    "ink:flex ink:items-center ink:justify-center ink:rounded-full ink:overflow-hidden",
                    variantClassNames(variant as InternalButtonVariant, {
                      wallet: "ink:size-4",
                      "wallet-inside": "ink:size-3",
                    })
                  )}
                >
                  {iconLeft}
                </div>
              </div>
            )}
            {child}
          </div>
        )}
      </Slottable>
    </Component>
  );
};
