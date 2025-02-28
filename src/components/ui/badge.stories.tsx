import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Badge className="gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
      New
    </Badge>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default" className="bg-green-500 hover:bg-green-600">
        Active
      </Badge>
      <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">
        Pending
      </Badge>
      <Badge variant="default" className="bg-red-500 hover:bg-red-600">
        Inactive
      </Badge>
      <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
        Processing
      </Badge>
      <Badge variant="default" className="bg-purple-500 hover:bg-purple-600">
        Beta
      </Badge>
    </div>
  ),
};

export const SizesAndShapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge className="text-[10px] px-1.5 py-0">Tiny</Badge>
        <Badge>Default</Badge>
        <Badge className="text-sm px-3 py-1">Large</Badge>
      </div>
      <div className="flex gap-2">
        <Badge className="rounded-sm">Square</Badge>
        <Badge>Rounded</Badge>
        <Badge className="rounded-full px-3">Pill</Badge>
      </div>
    </div>
  ),
};
