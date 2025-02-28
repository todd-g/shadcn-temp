import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./toggle";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    pressed: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
  },
};

export const Pressed: Story = {
  args: {
    children: "Toggle",
    pressed: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Toggle",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    "aria-label": "Toggle bold",
    children: <Bold className="h-4 w-4" />,
  },
};

export const WithTextAndIcon: Story = {
  args: {
    children: (
      <>
        <Bold className="h-4 w-4" />
        <span>Bold</span>
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Toggle",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Toggle",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Toggle",
  },
};

export const TextFormatting: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Toggle variant="outline" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

export const ToggleGroup: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Toggle pressed>Bold</Toggle>
        <Toggle>Italic</Toggle>
        <Toggle>Underline</Toggle>
      </div>
      <div className="flex items-center space-x-2">
        <Toggle variant="outline" size="sm">
          Small
        </Toggle>
        <Toggle variant="outline">Default</Toggle>
        <Toggle variant="outline" size="lg">
          Large
        </Toggle>
      </div>
    </div>
  ),
};
