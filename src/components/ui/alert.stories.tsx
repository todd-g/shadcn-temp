import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import {
  RocketIcon,
  InfoIcon,
  AlertCircleIcon,
  CheckCircleIcon,
} from "lucide-react";

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert — check it out!
        </AlertDescription>
      </>
    ),
    variant: "default",
    className: "w-[450px]",
  },
};

export const Destructive: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This is a destructive alert — be careful!
        </AlertDescription>
      </>
    ),
    variant: "destructive",
    className: "w-[450px]",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Alert className="w-[450px]">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This alert includes an icon for additional visual context.
      </AlertDescription>
    </Alert>
  ),
};

export const SuccessAlert: Story = {
  render: () => (
    <Alert className="border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300 dark:border-green-800 w-[450px]">
      <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const ErrorAlert: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[450px]">
      <AlertCircleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was an error processing your request. Please try again.
      </AlertDescription>
    </Alert>
  ),
};

export const InfoAlert: Story = {
  render: () => (
    <Alert className="border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800 w-[450px]">
      <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational message for your attention.
      </AlertDescription>
    </Alert>
  ),
};

export const FeatureAlert: Story = {
  render: () => (
    <Alert className="border-purple-500 bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800 w-[450px]">
      <RocketIcon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
      <AlertTitle>New Feature</AlertTitle>
      <AlertDescription>
        We've just launched a new feature! Check out the updated dashboard.
      </AlertDescription>
    </Alert>
  ),
};
