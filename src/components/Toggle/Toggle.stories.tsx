import type { Meta, StoryObj } from "@storybook/react";
import { Toggle, ToggleProps } from "./index";
import { fn } from "@storybook/test";
import { useEffect, useState } from "react";

const meta: Meta<ToggleProps> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: {
    checked: false,
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {},
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <Toggle {...args} checked={checked} onChange={setChecked} />;
  },
};
