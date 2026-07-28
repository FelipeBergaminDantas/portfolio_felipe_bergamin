"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/lib/i18n";

const analyticsCard = [
  {
    categoryKey: "skills.categories.analytics",
    skills: [
      "skills.items.powerBi",
      "skills.items.dax",
      "skills.items.powerQuery",
      "skills.items.businessIntelligence",
      "skills.items.dataVisualization",
      "skills.items.dashboardDevelopment",
      "skills.items.kpiAnalysis",
      "skills.items.excelAnalytics",
    ],
  },
  {
    categoryKey: "skills.categories.engineering",
    skills: [
      "skills.items.python",
      "skills.items.sql",
      "skills.items.etl",
      "skills.items.dataPipelines",
      "skills.items.dataWarehouse",
      "skills.items.dataModeling",
      "skills.items.dataIntegration",
      "skills.items.dataQuality",
      "skills.items.sqlServer",
      "skills.items.postgreSql",
      "skills.items.mySql",
    ],
  },
  {
    categoryKey: "skills.categories.automation",
    skills: [
      "skills.items.n8n",
      "skills.items.aiAgents",
      "skills.items.llmIntegration",
      "skills.items.processAutomation",
      "skills.items.apiIntegration",
    ],
  },
];

const softwareCard = [
  {
    categoryKey: "skills.categories.frontend",
    skills: [
      "skills.items.javaScript",
      "skills.items.html5",
      "skills.items.css3",
      "skills.items.tailwindCss",
      "skills.items.powerQuery",
      "skills.items.python",
    ],
  },
  {
    categoryKey: "skills.categories.backend",
    skills: [
      "skills.items.python",
      "skills.items.fastApi",
      "skills.items.restApis",
      "skills.items.swaggerOpenApi",
      "skills.items.authentication",
      "skills.items.oauth",
    ],
  },
  {
    categoryKey: "skills.categories.tools",
    skills: [
      "skills.items.git",
      "skills.items.gitHub",
      "skills.items.ciCd",
      "skills.items.vercel",
      "skills.items.softwareArchitecture",
      "skills.items.responsiveDesign",
    ],
  },
];

function SkillPill({ skill }: { skill: string }) {
  return <span className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3.5 py-2 text-sm text-slate-300">{skill}</span>;
}

export function SkillsSection() {
  const { t } = useLocale();

  return (
    <section id="skills" className="border-t border-slate-800/80 px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <Container>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">{t("skills.eyebrow")}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            {t("skills.title")}
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-[1.75rem] border border-slate-800/80 bg-[#0f1420] p-8 shadow-[0_18px_45px_rgba(2,6,23,0.24)]">
            <h3 className="text-2xl font-semibold text-slate-100">{t("skills.analyticsTitle")}</h3>
            <div className="mt-8 space-y-7">
              {analyticsCard.map((group) => (
                <div key={group.categoryKey}>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{t(group.categoryKey)}</h4>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <SkillPill key={skill} skill={t(skill)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-[1.75rem] border border-slate-800/80 bg-[#0f1420] p-8 shadow-[0_18px_45px_rgba(2,6,23,0.24)]">
            <h3 className="text-2xl font-semibold text-slate-100">{t("skills.softwareTitle")}</h3>
            <div className="mt-8 space-y-7">
              {softwareCard.map((group) => (
                <div key={group.categoryKey}>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{t(group.categoryKey)}</h4>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <SkillPill key={skill} skill={t(skill)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
