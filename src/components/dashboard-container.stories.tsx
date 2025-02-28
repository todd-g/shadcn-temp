import type { Meta, StoryObj } from "@storybook/react";
import { DashboardContainer } from "@/components/dashboard-container";

const meta = {
  title: "Blocks/DashboardContainer",
  component: DashboardContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DashboardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="absolute inset-0">
      <DashboardContainer>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </DashboardContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The default dashboard container with placeholder content. Use Storybook's viewport controls to test responsive behavior.",
      },
    },
  },
};

export const WithCustomTitle: Story = {
  render: () => (
    <div className="absolute inset-0">
      <DashboardContainer
        title="Analytics"
        parentLabel="Dashboard"
        parentPath="/dashboard"
      >
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[50vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </DashboardContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dashboard container with custom title and breadcrumb navigation.",
      },
    },
  },
};

export const WithRichContent: Story = {
  render: () => (
    <div className="absolute inset-0">
      <DashboardContainer title="Dashboard Overview">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-3xl font-bold mt-2">12,345</p>
            <p className="text-sm text-muted-foreground mt-1">
              +12% from last month
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Revenue</h3>
            <p className="text-3xl font-bold mt-2">$34,567</p>
            <p className="text-sm text-muted-foreground mt-1">
              +8% from last month
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Active Projects</h3>
            <p className="text-3xl font-bold mt-2">27</p>
            <p className="text-sm text-muted-foreground mt-1">
              +3 new this week
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Completion Rate</h3>
            <p className="text-3xl font-bold mt-2">92%</p>
            <p className="text-sm text-muted-foreground mt-1">
              +5% from last month
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-10 w-10 rounded-full bg-muted/70 flex items-center justify-center">
                    {i}
                  </div>
                  <div>
                    <p className="font-medium">Activity {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Description of activity {i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
                >
                  <div className="h-10 w-10 rounded-full bg-muted/70 flex items-center justify-center">
                    {i}
                  </div>
                  <div>
                    <p className="font-medium">Task {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Due in {i} day{i !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardContainer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dashboard container with rich content showing stats, activity, and tasks.",
      },
    },
  },
};

export const DarkMode: Story = {
  render: () => (
    <div className="absolute inset-0 dark">
      <DashboardContainer title="Dark Dashboard">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-3xl font-bold mt-2">12,345</p>
            <p className="text-sm text-muted-foreground mt-1">
              +12% from last month
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Revenue</h3>
            <p className="text-3xl font-bold mt-2">$34,567</p>
            <p className="text-sm text-muted-foreground mt-1">
              +8% from last month
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Active Projects</h3>
            <p className="text-3xl font-bold mt-2">27</p>
            <p className="text-sm text-muted-foreground mt-1">
              +3 new this week
            </p>
          </div>
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-medium">Completion Rate</h3>
            <p className="text-3xl font-bold mt-2">92%</p>
            <p className="text-sm text-muted-foreground mt-1">
              +5% from last month
            </p>
          </div>
        </div>
        <div className="min-h-[30vh] rounded-xl bg-card p-6 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Main Content Area</h3>
          <p className="text-muted-foreground">
            This is the main content area of the dashboard in dark mode.
          </p>
        </div>
      </DashboardContainer>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "dark",
    },
    docs: {
      description: {
        story: "Dashboard container in dark mode with sample content.",
      },
    },
  },
};
