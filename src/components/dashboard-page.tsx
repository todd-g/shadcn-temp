import { DashboardContainer } from "@/components/dashboard-container";

interface DashboardPageProps {
  children?: React.ReactNode;
  title?: string;
  parentPath?: string;
  parentLabel?: string;
}

export function DashboardPage({
  children,
  title,
  parentPath,
  parentLabel,
}: DashboardPageProps) {
  return (
    <DashboardContainer
      title={title}
      parentPath={parentPath}
      parentLabel={parentLabel}
    >
      {children}
    </DashboardContainer>
  );
}
