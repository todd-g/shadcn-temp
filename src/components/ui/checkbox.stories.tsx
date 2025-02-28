import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "terms",
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    id: "terms",
    checked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    id: "terms",
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="terms" className="text-muted-foreground">
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const DisabledChecked: Story = {
  args: {
    id: "terms",
    disabled: true,
    checked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="terms" className="text-muted-foreground">
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const CheckboxList: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" />
        <Label htmlFor="option1">Email notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option2" defaultChecked />
        <Label htmlFor="option2">SMS notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option3" />
        <Label htmlFor="option3">Push notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option4" disabled />
        <Label htmlFor="option4" className="text-muted-foreground">
          Mail notifications (unavailable)
        </Label>
      </div>
    </div>
  ),
};

export const IndeterminateExample: Story = {
  render: () => {
    // This is a simplified example of an indeterminate checkbox
    // In a real app, you would manage this state based on child checkboxes
    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="parent"
            className="data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground"
            data-state="indeterminate"
          />
          <Label htmlFor="parent" className="font-medium">
            Select all items
          </Label>
        </div>
        <div className="ml-6 space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="child1" defaultChecked />
            <Label htmlFor="child1">Item 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="child2" />
            <Label htmlFor="child2">Item 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="child3" defaultChecked />
            <Label htmlFor="child3">Item 3</Label>
          </div>
        </div>
      </div>
    );
  },
};
