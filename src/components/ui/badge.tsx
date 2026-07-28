import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "soft";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const base = "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium tracking-wide";
  const styles = {
    default: "border-slate-700/70 bg-slate-900/70 text-slate-200",
    soft: "border-orange-400/25 bg-orange-500/10 text-orange-300",
  };

  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}
