import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { TextBox } from "~/components";

const meta: Meta<typeof TextBox> = {
  title: "Components/Inputs",
  component: TextBox,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    value: {
      control: { type: "text" },
    },
  },
  args: {
    disabled: false,
    value: "",
  },
};

type Story = StoryObj<typeof TextBox>;

export const NormalTextBox: Story = {
  name: "TextBox",
  args: {},
};

export default meta;
