import { HomeHero } from "@/components/home-hero";
import { HomeFeatures } from "@/components/home-features";
import { Link } from "react-router-dom";

interface HomePageProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export function HomePage({ onGetStarted, onLearnMore }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold">Acme Inc</span>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              to="/documentation"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => {
                if (onGetStarted) {
                  e.preventDefault();
                  onGetStarted();
                }
              }}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <HomeHero onGetStarted={onGetStarted} onLearnMore={onLearnMore} />
        <HomeFeatures />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Acme Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
