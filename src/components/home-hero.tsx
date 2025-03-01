import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface HomeHeroProps extends React.ComponentProps<"div"> {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export function HomeHero({
  className,
  onGetStarted,
  onLearnMore,
  ...props
}: HomeHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background py-16 sm:py-24",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Build beautiful apps with our component library
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A professionally designed, fully responsive UI toolkit that helps
            developers build high-quality web applications faster.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                onGetStarted?.();
              }}
            >
              Get started
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                onLearnMore?.();
              }}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16 flow-root sm:mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl bg-muted/50 p-2 ring-1 ring-inset ring-muted/10 lg:rounded-2xl lg:p-4">
            <img
              src="/homepage-placeholder.jpg"
              alt="App screenshot"
              className="rounded-md shadow-2xl ring-1 ring-muted/10 w-full"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
