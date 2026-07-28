"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import ptBr from "@/../locales/pt-BR.json";
import enUs from "@/../locales/en-US.json";

export type Locale = "pt-BR" | "en-US";

type TranslationMap = typeof ptBr;

const dictionaries: Record<Locale, TranslationMap> = {
  "pt-BR": ptBr,
  "en-US": enUs,
};

const STORAGE_KEY = "portfolio-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt-BR");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "pt-BR" || stored === "en-US") {
      setLocale(stored);
      return;
    }

    const browserLocale = navigator.language;
    if (browserLocale.startsWith("en")) {
      setLocale("en-US");
    }
  }, []);

  const setAndPersistLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const t = useMemo(() => {
    return (path: string) => {
      const segments = path.split(".");
      let current: unknown = dictionaries[locale];

      for (const segment of segments) {
        if (typeof current === "object" && current !== null && segment in current) {
          current = (current as Record<string, unknown>)[segment];
        } else {
          return path;
        }
      }

      return typeof current === "string" ? current : path;
    };
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale: setAndPersistLocale, t }), [locale, t]);

  return React.createElement(LocaleContext.Provider, { value }, children);
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}
