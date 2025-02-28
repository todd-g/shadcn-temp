import { useState } from "react";
import { Button } from "@/components/ui/button";
// Remove unused imports
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// Remove App.css import to test if it's causing conflicts
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-foreground mb-8">
        Shadcn Button Showcase
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
          <div className="flex flex-col gap-4">
            <Button onClick={() => setCount(count + 1)}>
              Default Button (count: {count})
            </Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
          <div className="flex flex-col gap-4">
            <Button size="default">Default Size</Button>
            <Button size="sm">Small Size</Button>
            <Button size="lg">Large Size</Button>
            <Button size="icon">🔍</Button>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-sm border col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Combined Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Button variant="outline" size="sm">
              Small Outline
            </Button>
            <Button variant="secondary" size="lg">
              Large Secondary
            </Button>
            <Button variant="destructive" size="sm">
              Small Destructive
            </Button>
            <Button variant="ghost" size="lg">
              Large Ghost
            </Button>
            <Button variant="outline" size="icon">
              🔔
            </Button>
            <Button variant="secondary" size="icon">
              ⚙️
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
