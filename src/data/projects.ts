import type { PortfolioProject } from "@/types/project";

export const projects: PortfolioProject[] = [
  {
    id: "climatech",
    slug: "climatech",
    category: "software",
    featured: true,
    title: {
      pt: "ClimaTech",
      en: "ClimaTech",
    },
    shortDescription: {
      pt: "Plataforma full stack para monitoramento inteligente de ambientes climatizados.",
      en: "Full stack platform for smart monitoring of climate-controlled environments.",
    },
    description: {
      pt: "Plataforma full stack para monitoramento inteligente de ambientes climatizados, desenvolvida para centralizar informações operacionais, acompanhar dados em tempo real e apoiar tomadas de decisão baseadas em dados. O projeto envolve uma arquitetura completa com frontend, backend, API e banco de dados.",
      en: "Full stack platform for smart monitoring of climate-controlled environments, designed to centralize operational information, track real-time data and support data-driven decision making. The project includes a complete architecture with frontend, backend, API and database.",
    },
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL"],
    links: {
      app: "https://plataforma-clima-tech.vercel.app/",
      api: "https://backend-climatech-production.up.railway.app/",
      github: "https://github.com/FelipeBergaminDantas/frontend-climatech",
    },
    demoCredentials: {
      pt: "E-mail: testeuser@gmail.com · Senha: 12345678",
      en: "Email: testeuser@gmail.com · Password: 12345678",
    },
    image: "/images/projects/climatech.svg",
    highlights: {
      pt: ["Arquitetura escalável", "UX orientada a dados", "Autenticação e dashboards"],
      en: ["Scalable architecture", "Data-driven UX", "Authentication and dashboards"],
    },
  },
  {
    id: "max-solutions",
    slug: "max-solutions",
    category: "software",
    featured: true,
    title: {
      pt: "Max Solutions & Performance",
      en: "Max Solutions & Performance",
    },
    shortDescription: {
      pt: "Landing page institucional com foco em conversão e apresentação de proposta de valor.",
      en: "Institutional landing page focused on conversion and value proposition presentation.",
    },
    description: {
      pt: "Landing page institucional desenvolvida para uma consultoria especializada em performance para vendedores do Mercado Livre, com foco em apresentar serviços, resultados e fortalecer a presença digital da empresa. O projeto foi construído com uma interface moderna, responsiva e orientada à conversão de clientes.",
      en: "Institutional landing page developed for a consultancy specialized in performance for Mercado Livre sellers, focused on presenting services, results and strengthening the company's digital presence. The project was built with a modern, responsive interface oriented toward customer conversion.",
    },
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    links: {
      app: "https://max-solutions.vercel.app/",
    },
    image: "/images/projects/max-solutions.svg",
    highlights: {
      pt: ["Interface premium", "Design orientado a conversão", "Responsividade completa"],
      en: ["Premium interface", "Conversion-oriented design", "Complete responsiveness"],
    },
  },
  {
    id: "robo-entregador",
    slug: "robo-entregador",
    category: "software",
    featured: false,
    title: {
      pt: "Robô Entregador",
      en: "Delivery Robot",
    },
    shortDescription: {
      pt: "Projeto integrador com automação, rotas otimizadas e visão operacional em tempo real.",
      en: "Integrator project with automation, optimized routes and real-time operational visibility.",
    },
    description: {
      pt: "Projeto integrador desenvolvido com foco em automação e sistemas embarcados, simulando um robô entregador capaz de executar operações automatizadas utilizando integração entre software e hardware. O projeto aplicou conceitos de programação, comunicação com dispositivos e desenvolvimento de soluções IoT.",
      en: "Integrator project developed with a focus on automation and embedded systems, simulating a delivery robot capable of executing automated operations using software and hardware integration. The project applied concepts of programming, device communication and IoT solution development.",
    },
    stack: ["TypeScript", "Java 17", "IoT", "ESP32"],
    links: {
      github: "https://github.com/FelipeBergaminDantas/robo-entregador",
    },
    image: "/images/projects/robot.svg",
    highlights: {
      pt: ["Automação orientada a operação", "Arquitetura prática", "Visão sistêmica"],
      en: ["Operations-oriented automation", "Practical architecture", "Systemic vision"],
    },
  },
];
