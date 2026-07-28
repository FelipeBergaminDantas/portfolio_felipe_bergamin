"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container } from "@/components/ui/container";
import { socialLinks } from "@/data/social";
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

const contactChannels = [
  {
    labelKey: "contact.email",
    value: socialLinks.email,
    href: composeGmailUrl(),
    accent: "bg-slate-900/80",
    iconClass: "text-slate-100",
    icon: "lucide" as const,
    iconComponent: Mail,
  },
  {
    labelKey: "contact.whatsapp",
    value: "+55 11 97475-6779",
    href: socialLinks.whatsapp,
    accent: "bg-emerald-600/90",
    iconClass: "text-white",
    icon: "lucide" as const,
    iconComponent: MessageCircle,
  },
  {
    labelKey: "contact.linkedin",
    valueKey: "contact.linkedinValue",
    href: socialLinks.linkedin,
    accent: "bg-sky-600/90",
    iconClass: "text-white",
    icon: "fontawesome" as const,
    iconComponent: faLinkedin,
  },
];

export function ContactSection() {
  const { t } = useLocale();
  const [channel, setChannel] = useState<"whatsapp" | "email">("whatsapp");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; subject?: string; message?: string }>({});

  const validate = () => {
    const nextErrors: { name?: string; subject?: string; message?: string } = {};

    if (!name.trim()) {
      nextErrors.name = t("contact.validation.name");
    }

    if (channel === "email") {
      if (!subject.trim()) {
        nextErrors.subject = t("contact.validation.subject");
      }
    }

    if (!message.trim()) {
      nextErrors.message = t("contact.validation.message");
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    if (channel === "whatsapp") {
      const text = encodeURIComponent(`Olá, Felipe! Meu nome é ${name.trim()} e quero conversar sobre: ${message.trim()}`);
      window.open(`${socialLinks.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
      return;
    }

    const emailSubject = subject.trim();
    const emailBody = `Nome: ${name.trim()}\n\nMensagem:\n${message.trim()}`;
    window.open(composeGmailUrl(emailSubject, emailBody), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="border-t border-slate-800/80 px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">{t("contact.eyebrow")}</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              {t("contact.title")}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              {t("contact.description")}
            </p>

            <div className="mt-8 grid gap-3">
              {contactChannels.map((item) => (
                <a key={item.labelKey} href={item.href} target="_blank" rel="noreferrer" className={`rounded-[1.25rem] border border-slate-800/80 p-4 transition hover:border-orange-400/30 ${item.accent}`}>
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full p-2.5 ${item.iconClass === "text-white" ? "bg-white/10" : "bg-slate-800/70"}`}>
                      {item.icon === "lucide" ? (
                        <item.iconComponent className={`h-4 w-4 ${item.iconClass}`} />
                      ) : (
                        <FontAwesomeIcon icon={item.iconComponent} className={`h-4 w-4 ${item.iconClass}`} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-slate-100">{t(item.labelKey)}</p>
                      <p className={`mt-1 text-sm ${item.labelKey === "contact.whatsapp" ? "text-emerald-50/90" : item.labelKey === "contact.linkedin" ? "text-sky-50/90" : "text-slate-400"}`}>
                        {item.valueKey ? t(item.valueKey) : item.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.05 }} onSubmit={handleSubmit} className="rounded-[1.75rem] border border-slate-800/80 bg-[#0f1420] p-7 shadow-[0_18px_45px_rgba(2,6,23,0.24)] sm:p-8">
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => setChannel("whatsapp")} className={`rounded-full px-4 py-2 text-sm font-medium transition ${channel === "whatsapp" ? "bg-emerald-600 text-white" : "bg-slate-900/80 text-slate-300"}`}>
                {t("contact.channelSwitch.whatsapp")}
              </button>
              <button type="button" onClick={() => setChannel("email")} className={`rounded-full px-4 py-2 text-sm font-medium transition ${channel === "email" ? "bg-orange-500 text-slate-950" : "bg-slate-900/80 text-slate-300"}`}>
                {t("contact.channelSwitch.email")}
              </button>
            </div>

            <div className="mt-7 grid gap-5">
              <div>
                <label className="mb-2 block text-sm text-slate-400" htmlFor="name">{t("contact.name")}</label>
                <input id="name" value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400/40" />
                {errors.name ? <p className="mt-2 text-sm text-orange-300">{errors.name}</p> : null}
              </div>

              {channel === "email" ? (
                <div>
                  <label className="mb-2 block text-sm text-slate-400" htmlFor="subject">{t("contact.subject")}</label>
                  <input id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400/40" />
                  {errors.subject ? <p className="mt-2 text-sm text-orange-300">{errors.subject}</p> : null}
                </div>
              ) : null}

              <div>
                <label className="mb-2 block text-sm text-slate-400" htmlFor="message">{t("contact.message")}</label>
                <textarea id="message" rows={5} value={message} onChange={(event) => setMessage(event.target.value)} className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400/40" />
                {errors.message ? <p className="mt-2 text-sm text-orange-300">{errors.message}</p> : null}
              </div>
            </div>

            <button type="submit" className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-orange-400">
              <Send className="h-4 w-4" />
              {channel === "whatsapp" ? t("contact.submitWhatsapp") : t("contact.submitEmail")}
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
