import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Settings, Calendar, Bell, User, Plus, Check } from "lucide-react";

const meta = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <h4 className="font-medium leading-none">Settings</h4>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notifications" className="rounded" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="darkMode" className="rounded" />
              <Label htmlFor="darkMode">Dark mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="sound" className="rounded" />
              <Label htmlFor="sound">Sound effects</Label>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const DatePicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[240px] justify-start text-left font-normal"
        >
          <Calendar className="mr-2 h-4 w-4" />
          <span>Pick a date</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 space-y-2">
          <h4 className="font-medium">Select a date</h4>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-md flex items-center justify-center hover:bg-muted cursor-pointer"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-2">
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Notifications: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">Notifications</h4>
            <Button variant="ghost" size="sm" className="gap-1">
              <Check className="h-3 w-3" />
              Mark all as read
            </Button>
          </div>
          <div className="grid gap-2">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="flex gap-2 rounded-lg p-2 hover:bg-muted">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    New message from user
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {i + 1} minute{i !== 0 ? "s" : ""} ago
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <span>John Doe</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs text-muted-foreground">
                john.doe@example.com
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <Button variant="ghost" size="sm" className="justify-start">
              Profile
            </Button>
            <Button variant="ghost" size="sm" className="justify-start">
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="justify-start">
              Help
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start text-destructive"
            >
              Logout
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const AddItem: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" className="gap-1">
          <Plus className="h-3.5 w-3.5" />
          Add Item
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Add new item</h4>
            <p className="text-sm text-muted-foreground">
              Fill in the details to add a new item to your collection.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter item name" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Enter description" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
              >
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Add Item</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
