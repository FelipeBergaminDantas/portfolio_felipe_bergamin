import { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionTitle({ eyebrow, title, description, align = "left", children }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-400">{description}</p> : null}
      {children}
    </div>
  );
}
