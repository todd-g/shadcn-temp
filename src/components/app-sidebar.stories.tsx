import type { Meta, StoryObj } from "@storybook/react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const meta = {
  title: "Components/AppSidebar",
  component: AppSidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
} satisfies Meta<typeof AppSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[600px] w-[280px] border border-border rounded-md overflow-hidden">
      <AppSidebar className="h-full" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The default sidebar component. For a full page layout with the sidebar, see the DashboardContainer component.",
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="h-[600px] w-[280px] border border-border rounded-md overflow-hidden dark">
      <AppSidebar className="h-full" />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: "The sidebar component in dark mode.",
      },
    },
  },
};
