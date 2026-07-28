"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

const highlightedText = {
  first: [
    "Análise de Dados",
    "Inteligência de Negócios",
    "Engenharia de Dados",
    "SQL",
    "Python",
    "ETL",
    "Power BI",
    "automações",
    "APIs",
    "n8n",
    "agentes de IA",
  ],
  second: [
    "Desenvolvimento de Software",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
  ],
  third: ["inglês avançado"],
};

function renderWithHighlights(text: string, highlights: string[]) {
  const parts = text.split(
    /(\b(?:Análise de Dados|Inteligência de Negócios|Engenharia de Dados|SQL|Python|ETL|Power BI|automações|APIs|n8n|agentes de IA|Desenvolvimento de Software|React|Next\.js|TypeScript|FastAPI|inglês avançado)\b)/g
  );

  return parts.map((part, index) => {
    if (highlights.includes(part)) {
      return (
        <span key={`${part}-${index}`} className="font-semibold text-orange-400">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section
      id="about"
      className="border-t border-slate-800/80 px-6 py-28 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto flex max-w-6xl justify-center">
        <div className="w-full max-w-[760px]">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
          >
            {t("about.title")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-12 space-y-7 text-lg leading-8 text-slate-300 sm:text-xl"
          >
            <p>
              {renderWithHighlights(
                t("about.paragraph1"),
                highlightedText.first
              )}
            </p>

            <p>
              {renderWithHighlights(
                t("about.paragraph2"),
                highlightedText.second
              )}
            </p>

            <p>
              {renderWithHighlights(
                t("about.paragraph3"),
                highlightedText.third
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}