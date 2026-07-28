"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { useLocale } from "@/lib/i18n";

const softwareProjects = projects.filter((project) => project.category === "software");

function getProjectAction(project: (typeof projects)[number], t: (path: string) => string) {
  if (project.links.app) {
    return { label: t("projects.actions.accessWebsite"), href: project.links.app, target: "_blank" as const };
  }
  if (project.links.github) {
    return { label: t("projects.actions.viewRepository"), href: project.links.github, target: "_blank" as const };
  }
  return { label: t("projects.actions.viewDetails"), href: "#", target: "_self" as const };
}

export function ProjectsSection() {
  const { locale, t } = useLocale();

  return (
    <section id="projects" className="border-t border-slate-800/80 px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <Container>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">{t("projects.eyebrow")}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            {t("projects.title")}
          </h2>
        </motion.div>

        <div className="mt-14 space-y-10">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
              <h3 className="text-2xl font-semibold text-slate-100">{t("projects.dataTitle")}</h3>
            </div>
            <div className="rounded-[1.5rem] border border-slate-800/80 bg-[#0f1420] px-8 py-14 text-center shadow-[0_18px_45px_rgba(2,6,23,0.16)]">
              <p className="text-lg text-slate-300">{t("projects.dataPlaceholder")}</p>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              <h3 className="text-2xl font-semibold text-slate-100">{t("projects.softwareTitle")}</h3>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {softwareProjects.map((project, index) => {
                const action = getProjectAction(project, t);
                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="group rounded-[1.5rem] border border-slate-800/80 bg-[#0f1420] p-6 shadow-[0_18px_45px_rgba(2,6,23,0.24)] transition hover:-translate-y-1 hover:border-orange-400/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{t("projects.softwareTitle")}</p>
                        <h4 className="mt-3 text-xl font-semibold text-slate-100">{locale === "pt-BR" ? project.title.pt : project.title.en}</h4>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-400">{locale === "pt-BR" ? project.description.pt : project.description.en}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{locale === "pt-BR" ? project.highlights.pt?.[0] ?? t("projects.defaultHighlight") : project.highlights.en?.[0] ?? t("projects.defaultHighlight")}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.id === "climatech" ? (
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {project.links.app && (
                          <a href={project.links.app} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-orange-500/90 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-orange-400">
                            {t("projects.actions.accessPlatform")}
                          </a>
                        )}
                        {project.links.api && (
                          <a href={`${project.links.api}/docs`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-orange-400/40 hover:text-orange-100">
                            {t("projects.actions.accessDocs")}
                          </a>
                        )}
                      </div>
                    ) : project.id === "max-solutions" ? (
                      project.links.app ? (
                        <a href={project.links.app} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center justify-center rounded-full bg-orange-500/90 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-orange-400">
                          {t("projects.actions.accessWebsite")}
                        </a>
                      ) : null
                    ) : project.links.github ? (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center justify-center rounded-full bg-orange-500/90 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-orange-400">
                        {t("projects.actions.viewRepository")}
                      </a>
                    ) : null}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
