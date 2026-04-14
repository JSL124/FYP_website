"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      data-route={pathname}
      data-testid="page-transition"
      className="page-transition"
    >
      {children}
    </div>
  );
}
