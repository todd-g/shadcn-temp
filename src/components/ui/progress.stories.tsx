import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";
import { useState, useEffect } from "react";
import { Button } from "./button";

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 40,
    className: "w-[300px]",
  },
};

export const Small: Story = {
  args: {
    value: 60,
    className: "w-[300px] h-1",
  },
};

export const Large: Story = {
  args: {
    value: 80,
    className: "w-[300px] h-3",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>60%</span>
      </div>
      <Progress value={60} />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Progress value={30} className="bg-blue-200">
        <div
          className="h-full bg-blue-600 transition-all"
          style={{ width: "30%" }}
        />
      </Progress>
      <Progress value={50} className="bg-green-200">
        <div
          className="h-full bg-green-600 transition-all"
          style={{ width: "50%" }}
        />
      </Progress>
      <Progress value={70} className="bg-amber-200">
        <div
          className="h-full bg-amber-600 transition-all"
          style={{ width: "70%" }}
        />
      </Progress>
      <Progress value={90} className="bg-red-200">
        <div
          className="h-full bg-red-600 transition-all"
          style={{ width: "90%" }}
        />
      </Progress>
    </div>
  ),
};

// Define components outside of the render function
function AnimatedProgressDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progress >= 100 ? 0 : progress + 10);
    }, 1000);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Loading...</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} />
    </div>
  );
}

export const Animated: Story = {
  render: () => <AnimatedProgressDemo />,
};

export const Indeterminate: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="text-sm">Loading...</div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
        <div className="animate-indeterminate h-full bg-primary" />
      </div>
    </div>
  ),
};

function StepsProgressDemo() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>
            Step {step} of {totalSteps}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} />
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          Previous
        </Button>
        <Button
          size="sm"
          onClick={() => setStep(Math.min(totalSteps, step + 1))}
          disabled={step === totalSteps}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export const WithSteps: Story = {
  render: () => <StepsProgressDemo />,
};

function FileUploadDemo() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (isUploading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 5;
        });
      }, 300);

      return () => clearInterval(interval);
    }
  }, [isUploading]);

  const startUpload = () => {
    setProgress(0);
    setIsUploading(true);
  };

  return (
    <div className="w-[300px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading file...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
      <Button onClick={startUpload} disabled={isUploading} className="w-full">
        {isUploading
          ? "Uploading..."
          : progress === 100
          ? "Upload Complete"
          : "Start Upload"}
      </Button>
    </div>
  );
}

export const FileUpload: Story = {
  render: () => <FileUploadDemo />,
};
