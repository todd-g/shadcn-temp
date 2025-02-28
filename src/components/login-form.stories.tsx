import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "@/components/login-form";

const meta = {
  title: "Blocks/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-[800px]">
      <LoginForm />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "light",
    },
    docs: {
      description: {
        story:
          "The default login form with a test image on the right side. Use Storybook's viewport controls to test responsive behavior.",
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="w-full max-w-[800px] dark">
      <LoginForm />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story:
          "The login form in dark mode with a test image on the right side.",
      },
    },
  },
};

export const WithCustomClassName: Story = {
  render: () => (
    <div className="w-full max-w-[800px]">
      <LoginForm className="border-2 border-dashed border-primary p-4 rounded-lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The login form with a custom class name applied to demonstrate styling flexibility.",
      },
    },
  },
};
