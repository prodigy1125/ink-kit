import type { Meta, StoryObj } from "@storybook/react";
import { InkIcon, SegmentedControl } from "../..";
import { InkLayout, InkLayoutProps, InkLayoutSideNav } from "./index";

const SideNav = () => {
  return (
    <InkLayoutSideNav
      links={[
        {
          children: "Home",
          href: "#home",
          icon: <InkIcon.Home />,
          target: "_self",
        },
        {
          children: "Settings",
          href: "#settings",
          icon: <InkIcon.Settings />,
          target: "_self",
        },
      ]}
    />
  );
};

const TopNav = () => {
  return (
    <SegmentedControl
      options={[
        { children: "Home", value: "home", selectedByDefault: true },
        { children: "Settings", value: "settings" },
      ]}
      onOptionChange={() => {}}
    />
  );
};

const meta: Meta<InkLayoutProps> = {
  title: "Layouts/InkLayout",
  component: InkLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: <div>Some content</div>,
    headerContent: <div>Header content</div>,
    topNavigation: <TopNav />,
    sideNavigation: <SideNav />,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

// Serves as a fun example of how to use `linkAs` to customize the underlying component of `InkNavLink`.
// It is necessary to allow users to pass `Link`
export const SideNavWithCustomButtons: Story = {
  args: {
    sideNavigation: (
      <InkLayoutSideNav
        links={[
          {
            children: <a className="ink:text-button-primary!">Home</a>,
            href: "#home",
            icon: <InkIcon.Home />,
            target: "_self",
            asChild: true,
          },
          {
            children: <a className="ink:text-button-primary!">Settings</a>,
            href: "#settings",
            icon: <InkIcon.Settings />,
            target: "_self",
            asChild: true,
          },
        ]}
      />
    ),
    children: (
      <div>
        The side nav can be a custom component for routing, for instance, if you
        want to use NextJS' own {`<Link />`} component.
      </div>
    ),
  },
};
