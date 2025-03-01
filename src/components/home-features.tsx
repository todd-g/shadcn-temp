import { cn } from "@/lib/utils";
import {
  Layers,
  Zap,
  Palette,
  Accessibility,
  Code,
  LayoutGrid,
} from "lucide-react";

interface FeatureItem {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: FeatureItem[] = [
  {
    name: "Component-based",
    description:
      "Build your UI with reusable, composable components that maintain consistency across your application.",
    icon: Layers,
  },
  {
    name: "Performance optimized",
    description:
      "Lightweight components designed for optimal performance and minimal bundle size.",
    icon: Zap,
  },
  {
    name: "Customizable",
    description:
      "Easily customize the look and feel to match your brand with our theming system.",
    icon: Palette,
  },
  {
    name: "Accessible",
    description:
      "Built with accessibility in mind, following WAI-ARIA standards for inclusive design.",
    icon: Accessibility,
  },
  {
    name: "Developer friendly",
    description:
      "Well-documented API with TypeScript support for a smooth development experience.",
    icon: Code,
  },
  {
    name: "Responsive layouts",
    description:
      "Responsive by default, ensuring your UI looks great on any device or screen size.",
    icon: LayoutGrid,
  },
];

export function HomeFeatures({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("bg-background py-16 sm:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Build faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to create your app
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our component library provides all the building blocks you need to
            create beautiful, functional, and accessible web applications.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
