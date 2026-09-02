import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type LiquidGlassPanelProps = PropsWithChildren<{
  className?: string;
  emphasis?: boolean;
}>;

export function LiquidGlassPanel({ children, className, emphasis = false }: LiquidGlassPanelProps) {
  return (
    <div className={cn("liquid-glass", emphasis && "liquid-glass-emphasis", className)}>
      {children}
    </div>
  );
}
