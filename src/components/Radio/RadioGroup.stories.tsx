import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup, RadioGroupProps, RadioLabel } from "./index";
import { fn } from "@storybook/test";
import { useEffect, useState } from "react";

const meta: Meta<RadioGroupProps> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    value: "1",
    children: (
      <>
        <RadioLabel label="First">
          <Radio value="1" />
        </RadioLabel>
        <RadioLabel label="Second">
          <Radio value="2" />
        </RadioLabel>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  },
};

export const WithDescription: Story = {
  args: {
    children: (
      <>
        <RadioLabel label="First" description="This is a description">
          <Radio value="1" />
        </RadioLabel>
        <RadioLabel label="Second" description="This is another description">
          <Radio value="2" />
        </RadioLabel>
      </>
    ),
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  },
};
