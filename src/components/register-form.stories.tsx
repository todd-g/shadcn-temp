import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "@/components/register-form";

const meta = {
  title: "Blocks/RegisterForm",
  component: RegisterForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-[800px]">
      <RegisterForm
        onRegister={(data) => {
          console.log("Registration data:", data);
        }}
        onLogin={() => {
          console.log("Login clicked");
        }}
        onSocialRegister={(provider) => {
          console.log(`Social registration with ${provider}`);
        }}
        onTermsClick={() => {
          console.log("Terms clicked");
        }}
        onPrivacyClick={() => {
          console.log("Privacy clicked");
        }}
      />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "light",
    },
    docs: {
      description: {
        story:
          "The default register form with a test image on the right side. Use Storybook's viewport controls to test responsive behavior.",
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="w-full max-w-[800px] dark">
      <RegisterForm
        onRegister={(data) => {
          console.log("Registration data:", data);
        }}
        onLogin={() => {
          console.log("Login clicked");
        }}
        onSocialRegister={(provider) => {
          console.log(`Social registration with ${provider}`);
        }}
        onTermsClick={() => {
          console.log("Terms clicked");
        }}
        onPrivacyClick={() => {
          console.log("Privacy clicked");
        }}
      />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story:
          "The register form in dark mode with a test image on the right side.",
      },
    },
  },
};

export const WithCustomClassName: Story = {
  render: () => (
    <div className="w-full max-w-[800px]">
      <RegisterForm
        className="border-2 border-dashed border-primary p-4 rounded-lg"
        onRegister={(data) => {
          console.log("Registration data:", data);
        }}
        onLogin={() => {
          console.log("Login clicked");
        }}
        onSocialRegister={(provider) => {
          console.log(`Social registration with ${provider}`);
        }}
        onTermsClick={() => {
          console.log("Terms clicked");
        }}
        onPrivacyClick={() => {
          console.log("Privacy clicked");
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The register form with a custom class name applied to demonstrate styling flexibility.",
      },
    },
  },
};
