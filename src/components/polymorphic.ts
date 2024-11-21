import { ComponentPropsWithoutRef, ElementType } from "react";

export type PolymorphicDefinition<E extends ElementType> = {
  as?: E;
  asProps?: ComponentPropsWithoutRef<E>;
};

export type PolymorphicProps<E extends ElementType> =
  ComponentPropsWithoutRef<E> & PolymorphicDefinition<E>;
