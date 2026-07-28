import Link from "next/link";
import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { socialLinks } from "@/data/social";
import { personal } from "@/data/personal";
import { useLocale } from "@/lib/i18n";

const composeGmailUrl = (subject = "", body = "") => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    tf: "cm",
    to: socialLinks.email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/u/0/?${params.toString()}`;
};

export function Footer() {
  const { t } = useLocale();

  const links = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.expertise"), href: "#expertise" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xl font-semibold text-slate-100">{personal.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{t("footer.description")}</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-orange-300">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-6 border-t border-slate-800/80 pt-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-orange-300"><i className="fab fa-github text-base" /> {t("footer.github")}</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-orange-300"><i className="fab fa-linkedin text-base" /> {t("footer.linkedin")}</a>
          <a href={composeGmailUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-orange-300"><Mail className="h-4 w-4" /> {t("footer.email")}</a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-orange-300"><MessageCircle className="h-4 w-4" /> {t("footer.whatsapp")}</a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">{t("footer.copyright")}</span>
          <a href="#home" className="rounded-full border border-slate-700/80 p-3 text-slate-300 transition hover:border-orange-400/40 hover:text-orange-300">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
