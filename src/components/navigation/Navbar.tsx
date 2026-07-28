"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { personal } from "@/data/personal";
import { useLocale } from "@/lib/i18n";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="#home" className="text-lg font-semibold tracking-[0.2em] text-slate-100 uppercase">
          {personal.name}
        </Link>

        <button className="rounded-full border border-slate-700/80 p-2 text-slate-200 lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className={`absolute left-0 top-full w-full border-t border-slate-800/80 bg-slate-950/95 px-6 py-5 shadow-2xl transition-all lg:static lg:flex lg:w-auto lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${isOpen ? "block" : "hidden lg:block"}`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-orange-300" onClick={() => setIsOpen(false)}>
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <div className="flex items-center gap-2 rounded-full border border-slate-700/80 p-1">
              <button type="button" onClick={() => setLocale("pt-BR")} className={`rounded-full px-3 py-1.5 text-sm transition ${locale === "pt-BR" ? "bg-orange-500 text-slate-950" : "text-slate-300"}`}>
                {t("language.pt")}
              </button>
              <button type="button" onClick={() => setLocale("en-US")} className={`rounded-full px-3 py-1.5 text-sm transition ${locale === "en-US" ? "bg-orange-500 text-slate-950" : "text-slate-300"}`}>
                {t("language.en")}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
