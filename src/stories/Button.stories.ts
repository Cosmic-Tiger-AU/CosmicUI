import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "..";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export default meta;
