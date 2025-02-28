import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import { Label } from "./label";
import { Volume2, VolumeX, Sun, Moon } from "lucide-react";
import { useState } from "react";

const meta = {
  title: "UI/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "object",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="slider">Slider Label</Label>
      <Slider defaultValue={[50]} max={100} step={1} id="slider" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [30],
    max: 100,
    step: 1,
    disabled: true,
    className: "w-[300px]",
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const Steps: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 10,
    className: "w-[300px]",
  },
};

export const VolumeControl: Story = {
  render: () => {
    // This is a client component pattern, but for Storybook it's fine
    const VolumeSlider = () => {
      const [volume, setVolume] = useState(50);
      return (
        <div className="flex items-center w-[300px] space-x-2">
          {volume === 0 ? (
            <VolumeX className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Volume2 className="h-5 w-5 text-muted-foreground" />
          )}
          <Slider
            defaultValue={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
            className="flex-1"
          />
          <div className="w-12 text-center text-sm text-muted-foreground">
            {volume}%
          </div>
        </div>
      );
    };

    return <VolumeSlider />;
  },
};

export const ThemeSlider: Story = {
  render: () => {
    // This is a client component pattern, but for Storybook it's fine
    const ThemeControl = () => {
      const [theme, setTheme] = useState(50);
      return (
        <div className="flex items-center w-[300px] space-x-2">
          <Moon className="h-5 w-5 text-muted-foreground" />
          <Slider
            defaultValue={[theme]}
            max={100}
            step={1}
            onValueChange={(value) => setTheme(value[0])}
            className="flex-1"
          />
          <Sun className="h-5 w-5 text-muted-foreground" />
        </div>
      );
    };

    return <ThemeControl />;
  },
};

export const ColorPicker: Story = {
  render: () => {
    // This is a client component pattern, but for Storybook it's fine
    const ColorPicker = () => {
      const [red, setRed] = useState(50);
      const [green, setGreen] = useState(100);
      const [blue, setBlue] = useState(150);

      const colorStyle = {
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      };

      return (
        <div className="w-[300px] space-y-5">
          <div className="h-20 w-full rounded-md border" style={colorStyle} />
          <div className="space-y-3">
            <div className="grid grid-cols-[30px_1fr] items-center gap-2">
              <Label className="text-right text-muted-foreground">R</Label>
              <Slider
                defaultValue={[red]}
                max={255}
                step={1}
                onValueChange={(value) => setRed(value[0])}
              />
            </div>
            <div className="grid grid-cols-[30px_1fr] items-center gap-2">
              <Label className="text-right text-muted-foreground">G</Label>
              <Slider
                defaultValue={[green]}
                max={255}
                step={1}
                onValueChange={(value) => setGreen(value[0])}
              />
            </div>
            <div className="grid grid-cols-[30px_1fr] items-center gap-2">
              <Label className="text-right text-muted-foreground">B</Label>
              <Slider
                defaultValue={[blue]}
                max={255}
                step={1}
                onValueChange={(value) => setBlue(value[0])}
              />
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            RGB({red}, {green}, {blue})
          </div>
        </div>
      );
    };

    return <ColorPicker />;
  },
};
