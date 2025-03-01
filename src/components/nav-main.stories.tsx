import type { Meta, StoryObj } from "@storybook/react";
import { NavMain } from "@/components/nav-main";
import { LayoutDashboard, Layers, FileText, Settings } from "lucide-react";

const meta = {
  title: "Navigation/NavMain",
  component: NavMain,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: { control: "object" },
    currentPath: { control: "text" },
    onItemClick: { action: "clicked" },
  },
} satisfies Meta<typeof NavMain>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    items: [
      {
        title: "Overview",
        url: "/dashboard",
      },
      {
        title: "Analytics",
        url: "/dashboard/analytics",
      },
      {
        title: "Reports",
        url: "/dashboard/reports",
      },
    ],
  },
  {
    title: "Playground",
    url: "/playground",
    icon: Layers,
    items: [
      {
        title: "Models",
        url: "/playground/models",
      },
      {
        title: "Experiments",
        url: "/playground/experiments",
      },
    ],
  },
  {
    title: "Documentation",
    url: "/documentation",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    onItemClick: (url) => console.log(`Navigating to: ${url}`),
  },
  render: (args) => (
    <div className="w-[250px] border rounded-md p-4">
      <NavMain {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Default navigation menu with sample items. Click handlers log to console.",
      },
    },
  },
};

export const WithActiveItem: Story = {
  args: {
    items: sampleItems,
    currentPath: "/dashboard/analytics",
    onItemClick: (url) => console.log(`Navigating to: ${url}`),
  },
  render: (args) => (
    <div className="w-[250px] border rounded-md p-4">
      <NavMain {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Navigation menu with an active item based on the currentPath prop.",
      },
    },
  },
};

export const DarkMode: Story = {
  args: {
    items: sampleItems,
    currentPath: "/playground",
    onItemClick: (url) => console.log(`Navigating to: ${url}`),
  },
  render: (args) => (
    <div className="w-[250px] border rounded-md p-4 dark">
      <NavMain {...args} />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: "Navigation menu in dark mode with an active item.",
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    items: sampleItems,
    currentPath: "/settings",
    className: "bg-muted/50 p-2 rounded-lg",
    onItemClick: (url) => console.log(`Navigating to: ${url}`),
  },
  render: (args) => (
    <div className="w-[250px] border rounded-md p-4">
      <NavMain {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Navigation menu with custom styling applied through className prop.",
      },
    },
  },
};
