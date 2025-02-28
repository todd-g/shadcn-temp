import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "account",
    className: "w-[400px]",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@johndoe" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const MultipleTabs: Story = {
  args: {
    defaultValue: "music",
    className: "w-[400px]",
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="music">Music</TabsTrigger>
        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        <TabsTrigger value="audiobooks">Audiobooks</TabsTrigger>
      </TabsList>
      <TabsContent value="music" className="p-4">
        <h3 className="text-lg font-medium">Music</h3>
        <p className="text-sm text-muted-foreground">
          Listen to your favorite music. Browse by genre, artist, or album.
        </p>
      </TabsContent>
      <TabsContent value="podcasts" className="p-4">
        <h3 className="text-lg font-medium">Podcasts</h3>
        <p className="text-sm text-muted-foreground">
          Discover podcasts on various topics. Subscribe to your favorites.
        </p>
      </TabsContent>
      <TabsContent value="audiobooks" className="p-4">
        <h3 className="text-lg font-medium">Audiobooks</h3>
        <p className="text-sm text-muted-foreground">
          Explore a wide range of audiobooks. From fiction to self-help.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  render: () => (
    <div className="flex w-[600px]">
      <Tabs defaultValue="overview" orientation="vertical" className="w-full">
        <div className="flex">
          <TabsList className="flex flex-col h-auto w-[200px] bg-muted p-2 mr-4">
            <TabsTrigger value="overview" className="justify-start w-full">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="justify-start w-full">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" className="justify-start w-full">
              Reports
            </TabsTrigger>
            <TabsTrigger value="settings" className="justify-start w-full">
              Settings
            </TabsTrigger>
          </TabsList>
          <div className="flex-1">
            <TabsContent value="overview" className="p-4 border rounded-md">
              <h3 className="text-lg font-medium">Overview</h3>
              <p className="text-sm text-muted-foreground mt-2">
                This is an overview of your account activity and performance.
              </p>
            </TabsContent>
            <TabsContent value="analytics" className="p-4 border rounded-md">
              <h3 className="text-lg font-medium">Analytics</h3>
              <p className="text-sm text-muted-foreground mt-2">
                View detailed analytics and metrics for your account.
              </p>
            </TabsContent>
            <TabsContent value="reports" className="p-4 border rounded-md">
              <h3 className="text-lg font-medium">Reports</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Generate and download reports for your account activity.
              </p>
            </TabsContent>
            <TabsContent value="settings" className="p-4 border rounded-md">
              <h3 className="text-lg font-medium">Settings</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Configure your account settings and preferences.
              </p>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="w-full bg-transparent border-b p-0 mb-4">
        <TabsTrigger
          value="tab1"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          First Tab
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Second Tab
        </TabsTrigger>
        <TabsTrigger
          value="tab3"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Third Tab
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4 border rounded-md">
        <p>Content for the first tab</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4 border rounded-md">
        <p>Content for the second tab</p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4 border rounded-md">
        <p>Content for the third tab</p>
      </TabsContent>
    </Tabs>
  ),
};
