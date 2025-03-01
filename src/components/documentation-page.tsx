import { DashboardContainer } from "@/components/dashboard-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DocumentationPageProps {
  title?: string;
  description?: string;
  content?: string;
}

export function DocumentationPage({
  title = "Documentation",
  description = "Learn how to use our API and integrate with your application.",
  content = "This is the documentation content. Replace this with your actual documentation.",
}: DocumentationPageProps) {
  return (
    <DashboardContainer
      title={title}
      parentPath="/documentation"
      parentLabel="Documentation"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert">
              <p>{content}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
            <CardDescription>
              Navigate through the documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <nav className="flex flex-col space-y-1">
              <a href="#" className="text-sm hover:underline">
                Introduction
              </a>
              <a href="#" className="text-sm hover:underline">
                Getting Started
              </a>
              <a href="#" className="text-sm hover:underline">
                Authentication
              </a>
              <a href="#" className="text-sm hover:underline">
                API Reference
              </a>
              <a href="#" className="text-sm hover:underline">
                Examples
              </a>
              <a href="#" className="text-sm hover:underline">
                Troubleshooting
              </a>
            </nav>
          </CardContent>
        </Card>
      </div>
    </DashboardContainer>
  );
}
