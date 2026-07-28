import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";
  const styles = {
    primary: "bg-orange-500 text-slate-950 hover:bg-orange-400 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_45px_rgba(249,115,22,0.2)]",
    secondary: "border border-slate-700/80 bg-slate-900/70 text-slate-100 hover:border-orange-400/40 hover:bg-slate-800/90",
  };

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles[variant]} ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${styles[variant]} ${className}`.trim()}>{children}</button>;
}
