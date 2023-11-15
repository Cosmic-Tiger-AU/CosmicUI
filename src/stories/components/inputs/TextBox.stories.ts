import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { TextBox } from "~/components";

const meta: Meta<typeof TextBox> = {
  title: "Components/Inputs/TextBox",
  component: TextBox,
};

type Story = StoryObj<typeof TextBox>;

export const Normal: Story = {
  args: {},
};

export default meta;
