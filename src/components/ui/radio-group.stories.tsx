import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { useState } from "react";

const meta = {
  title: "UI/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-option-one" />
        <Label htmlFor="disabled-option-one">Enabled Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-option-two" disabled />
        <Label htmlFor="disabled-option-two" className="text-muted-foreground">
          Disabled Option
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option-three"
          id="disabled-option-three"
          disabled
        />
        <Label
          htmlFor="disabled-option-three"
          className="text-muted-foreground"
        >
          Disabled Option
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="default" id="r1" className="mt-1" />
        <div className="grid gap-1.5">
          <Label htmlFor="r1">Default</Label>
          <p className="text-sm text-muted-foreground">
            The default system setting.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="comfortable" id="r2" className="mt-1" />
        <div className="grid gap-1.5">
          <Label htmlFor="r2">Comfortable</Label>
          <p className="text-sm text-muted-foreground">
            A more comfortable layout with increased spacing.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="compact" id="r3" className="mt-1" />
        <div className="grid gap-1.5">
          <Label htmlFor="r3">Compact</Label>
          <p className="text-sm text-muted-foreground">
            A more compact layout with reduced spacing.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <RadioGroup defaultValue="default">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="default"
            id="size-default"
            className="h-4 w-4"
          />
          <Label htmlFor="size-default">Default Size</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="medium">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="medium" id="size-medium" className="h-5 w-5" />
          <Label htmlFor="size-medium">Medium Size</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="large">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="large" id="size-large" className="h-6 w-6" />
          <Label htmlFor="size-large">Large Size</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="flex space-x-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="horizontal-option-one" />
        <Label htmlFor="horizontal-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="horizontal-option-two" />
        <Label htmlFor="horizontal-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="horizontal-option-three" />
        <Label htmlFor="horizontal-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

function InteractiveDemo() {
  const [position, setPosition] = useState("top");

  return (
    <div className="w-[350px] space-y-4">
      <div className="rounded-lg border p-4">
        <div className="text-center font-medium">Notification Position</div>
        <p className="text-center text-sm text-muted-foreground">
          Select where notifications should appear.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 place-items-center">
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "top-left" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "top-left" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "top" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "top" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "top-right" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "top-right" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "left" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "left" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "center" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "center" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "right" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "right" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "bottom-left" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "bottom-left" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "bottom" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "bottom" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
          <div
            className={`h-12 w-12 rounded-md border-2 flex items-center justify-center ${
              position === "bottom-right" ? "border-primary" : "border-muted"
            }`}
          >
            {position === "bottom-right" && (
              <div className="h-3 w-3 rounded-full bg-primary" />
            )}
          </div>
        </div>
      </div>
      <RadioGroup
        value={position}
        onValueChange={setPosition}
        className="grid grid-cols-3 gap-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="top-left" id="top-left" />
          <Label htmlFor="top-left">Top Left</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="top" id="top" />
          <Label htmlFor="top">Top</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="top-right" id="top-right" />
          <Label htmlFor="top-right">Top Right</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="left" id="left" />
          <Label htmlFor="left">Left</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="center" id="center" />
          <Label htmlFor="center">Center</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="right" id="right" />
          <Label htmlFor="right">Right</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bottom-left" id="bottom-left" />
          <Label htmlFor="bottom-left">Bottom Left</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bottom" id="bottom" />
          <Label htmlFor="bottom">Bottom</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="bottom-right" id="bottom-right" />
          <Label htmlFor="bottom-right">Bottom Right</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
