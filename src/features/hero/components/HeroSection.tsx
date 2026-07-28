"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.12),_transparent_24%),linear-gradient(135deg,_rgba(2,6,23,0.96),_rgba(7,17,31,0.9))]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mt-4 text-xl font-medium uppercase tracking-[0.28em] text-orange-400 sm:text-2xl">
            {t("hero.subtitle")}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">{t("hero.primaryCta")}</Button>
            <Button href="#contact" variant="secondary">{t("hero.secondaryCta")}</Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/90 px-4 py-3 text-sm font-medium text-white transition hover:bg-violet-500">
              <i className="fab fa-github text-base" />
              {t("hero.github")}
            </Link>
            <Link href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-600/90 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-500">
              <i className="fab fa-linkedin text-base" />
              {t("hero.linkedin")}
            </Link>
            <Link href={personal.cvUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-orange-400/40 hover:text-orange-300">
              <FileText className="h-4 w-4" />
              {t("hero.cv")}
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.2),_transparent_45%)] blur-3xl" />
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-orange-500/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/40 p-2 shadow-[0_0_80px_rgba(2,6,23,0.35)] backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-950">
              <Image
                src="/images/felipe.jpg"
                alt="Foto de Felipe Bergamin Dantas"
                width={560}
                height={560}
                className="aspect-square w-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl justify-center">
        <a href="#about" className="flex flex-col items-center gap-2 text-sm text-slate-400 transition hover:text-orange-300">
          <span>{t("hero.scroll")}</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
