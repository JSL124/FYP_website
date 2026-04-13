import DocsSidebar from "@/app/components/DocsSidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <DocsSidebar />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
