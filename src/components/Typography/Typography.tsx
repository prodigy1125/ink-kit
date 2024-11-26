import { classNames, variantClassNames } from "../../util/classes";
import { PropsWithChildren } from "react";
import { PolymorphicProps } from "../polymorphic";

export type TypographyProps<T extends React.ElementType = "div"> =
  PropsWithChildren<{
    variant:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "body-1"
      | "body-2-regular"
      | "body-2-bold"
      | "body-3-regular"
      | "body-3-bold"
      | "caption-1-regular"
      | "caption-1-bold"
      | "caption-2";
    className?: string;
  }> &
    PolymorphicProps<T>;

export const Typography = <T extends React.ElementType = "div">({
  variant,
  as,
  asProps,
  className,
  children,
}: TypographyProps<T>) => {
  const Component = as ?? "div";
  return (
    <Component
      className={classNames(
        "ink:font-default",
        /**
         * It would be tempting to put those in a string template, but then Tailwind won't be able to detect the classes here
         * and won't include them in the production build until we actually use them somewhere.
         **/
        variantClassNames(variant, {
          h1: "ink:text-h1",
          h2: "ink:text-h2",
          h3: "ink:text-h3",
          h4: "ink:text-h4",
          "body-1": "ink:text-body-1",
          "body-2-regular": "ink:text-body-2-regular",
          "body-2-bold": "ink:text-body-2-bold",
          "body-3-regular": "ink:text-body-3-regular",
          "body-3-bold": "ink:text-body-3-bold",
          "caption-1-regular": "ink:text-caption-1-regular",
          "caption-1-bold": "ink:text-caption-1-bold",
          "caption-2": "ink:text-caption-2",
        }),
        className
      )}
      {...asProps}
    >
      {children}
    </Component>
  );
};
