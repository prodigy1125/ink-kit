import React from "react";
import { classNames } from "../../util/classes";
import { Slot, Slottable } from "../../components/Slot";

export interface InkLayoutLink extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  href?: string;
  icon?: React.ReactNode;
  target?: StringWithAutocomplete<"_blank" | "_self">;
  asChild?: boolean;
  active?: boolean;
}

export interface InkNavLinkProps extends InkLayoutLink {}

export const InkNavLink: React.FC<InkNavLinkProps> = ({
  href,
  icon,
  children,
  className = "",
  asChild,
  onClick,
  active,
  ...props
}) => {
  const Component = asChild ? Slot : "a";

  return (
    <Component
      href={href}
      className={classNames(
        "ink:flex ink:items-center ink:gap-1 ink:px-1.5 ink:py-1 ink:text-inherit ink:no-underline ink:rounded-md ink:box-border ink:hover:text-text-default",
        active
          ? "ink:bg-background-container ink:text-text-default"
          : "ink:text-text-muted",
        className
      )}
      draggable={false}
      onClick={onClick}
      {...props}
    >
      <Slottable child={children}>
        {(child) => (
          <>
            {icon && <div className="ink:size-3 ink:p-0.5">{icon}</div>}
            {child}
          </>
        )}
      </Slottable>
    </Component>
  );
};
