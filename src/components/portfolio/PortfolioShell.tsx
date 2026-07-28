"use client";

import { HeroSection } from "@/features/hero/components/HeroSection";
import { AboutSection } from "@/features/about/components/AboutSection";
import { ExpertiseSection } from "@/features/expertise/components/ExpertiseSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { Footer } from "@/features/footer/components/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { LocaleProvider } from "@/lib/i18n";

export function PortfolioShell() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
