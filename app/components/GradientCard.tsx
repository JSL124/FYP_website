import type { ReactNode } from "react";

export default function GradientCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`gradient-border ${className}`}>
      {children}
    </div>
  );
}
