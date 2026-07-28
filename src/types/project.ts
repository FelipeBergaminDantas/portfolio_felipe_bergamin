export type Locale = "pt" | "en";

export interface TranslatedText {
  pt: string;
  en: string;
}

export interface TranslatedList {
  pt: string[];
  en: string[];
}

export interface PortfolioProject {
  id: string;
  slug: string;
  category: "data" | "software";
  featured: boolean;
  title: TranslatedText;
  shortDescription: TranslatedText;
  description: TranslatedText;
  stack: string[];
  links: {
    app?: string;
    api?: string;
    github?: string;
    demo?: string;
  };
  demoCredentials?: TranslatedText;
  image: string;
  highlights: TranslatedList;
}
