"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/lib/i18n";

const areas = [
  {
    title: "Análise de Dados",
    description: "Transformo dados em informações estratégicas para apoiar decisões e gerar valor para o negócio.",
  },
  {
    title: "Engenharia de Dados",
    description: "Estruturo pipelines, processos de ETL e modelos de dados confiáveis e escaláveis.",
  },
  {
    title: "Inteligência de Negócios",
    description: "Desenvolvo painéis e indicadores que tornam dados complexos mais claros e acessíveis.",
  },
  {
    title: "Desenvolvimento de Software",
    description: "Desenvolvo aplicações web e APIs modernas para entregar soluções completas de ponta a ponta.",
  },
];

export function ExpertiseSection() {
  const { t } = useLocale();

  return (
    <section id="expertise" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
        >
          {t("expertise.title")}
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {areas.map((area, index) => (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6, boxShadow: "0 0 0 1px rgba(249,115,22,0.18), 0 20px 45px rgba(2,6,23,0.35)" }}
              className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/70 p-7 shadow-[0_18px_45px_rgba(2,6,23,0.24)] transition-all duration-300"
            >
              <div className="h-2 w-14 rounded-full bg-orange-400" />
              <h3 className="mt-5 text-xl font-semibold text-slate-100">{t(`expertise.areas.${index}.title`)}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{t(`expertise.areas.${index}.description`)}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
