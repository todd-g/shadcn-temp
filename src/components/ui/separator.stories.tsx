import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta = {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    decorative: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-[300px]",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    className: "h-[100px]",
  },
  render: (args) => (
    <div className="flex h-[100px] items-center">
      <div>Left Content</div>
      <Separator {...args} className="mx-4" />
      <div>Right Content</div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="text-lg font-medium">Section Title</div>
      <Separator />
      <div className="text-sm text-muted-foreground">
        This is some content below the separator.
      </div>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Separator className="bg-primary" />
      <Separator className="bg-destructive" />
      <Separator className="bg-muted-foreground" />
      <Separator className="h-[2px] bg-primary" />
      <Separator className="h-[4px] bg-primary rounded-full" />
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border p-4 shadow-sm">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Update your personal information.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="font-medium">Name</div>
          <div className="text-sm text-muted-foreground">John Doe</div>
        </div>
        <div className="space-y-2">
          <div className="font-medium">Email</div>
          <div className="text-sm text-muted-foreground">
            john.doe@example.com
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <div className="w-[240px] rounded-lg border p-4 shadow-sm">
      <nav className="space-y-2">
        <div className="font-medium">Dashboard</div>
        <div className="font-medium">Projects</div>
        <div className="font-medium">Tasks</div>
        <Separator className="my-2" />
        <div className="font-medium">Settings</div>
        <div className="font-medium">Help</div>
      </nav>
    </div>
  ),
};

export const VerticalInLayout: Story = {
  render: () => (
    <div className="flex h-[200px] w-[500px] rounded-lg border shadow-sm">
      <div className="w-[200px] p-4">
        <div className="font-medium">Sidebar</div>
        <div className="mt-4 text-sm text-muted-foreground">
          Navigation items would go here.
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1 p-4">
        <div className="font-medium">Main Content</div>
        <div className="mt-4 text-sm text-muted-foreground">
          This is the main content area of the application.
        </div>
      </div>
    </div>
  ),
};
