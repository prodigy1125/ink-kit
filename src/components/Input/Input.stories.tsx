import type { Meta, StoryObj } from "@storybook/react";
import { Input, type InputProps } from "./index";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Placeholder",
    type: "text",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};
