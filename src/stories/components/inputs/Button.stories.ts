import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../..";

const meta: Meta<typeof Button> = {
  title: "Components/Inputs/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    icon: {
      options: [
        undefined,
        "fa-solid fa-check",
        "fa-solid fa-times",
        "fa-solid fa-chevron-right",
        "fa-solid fa-chevron-left",
      ],
    },
  },
  args: {
    children: "Button",
    icon: undefined,
    iconPosition: "right",
  },
};

type Story = StoryObj<typeof Button>;

export const Plain: Story = {
  args: {
    variant: "plain",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export default meta;
