import { EXAMPLE_LINKS } from "./ExampleLayoutLinks";
import {
  InkLayoutMobileNav,
  InkLayoutMobileNavProps,
} from "../InkLayout/MobileNav";
import { useInkLayoutContext } from "../InkLayout/InkLayoutContext";

export const ExampleMobileNav = (
  props: Omit<InkLayoutMobileNavProps, "links">
) => {
  const { setIsMobileNavOpen } = useInkLayoutContext();
  return (
    <InkLayoutMobileNav
      links={EXAMPLE_LINKS}
      bottom={<div>Bottom content</div>}
      {...props}
      onLinkClick={() => setIsMobileNavOpen(false)}
    />
  );
};
