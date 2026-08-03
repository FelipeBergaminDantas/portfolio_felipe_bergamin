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
      pt: "Projeto premiado com o 3º lugar na ExpoTech, evento acadêmico de tecnologia da faculdade, desenvolvido para apresentar soluções inovadoras na área de computação. O ClimaTech é uma plataforma full stack para monitoramento inteligente de ambientes climatizados, desenvolvida para centralizar informações operacionais, acompanhar dados em tempo real e apoiar tomadas de decisão baseadas em dados.",

      en: "Project awarded 3rd place at ExpoTech, an academic technology event focused on presenting innovative solutions in computing. ClimaTech is a full stack platform for smart monitoring of climate-controlled environments, designed to centralize operational information, track real-time data and support data-driven decision making.",
    },
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL"],
    links: {
      app: "https://plataforma-climatech.vercel.app/",
      api: "https://backend-climatech.onrender.com",
      github: "https://github.com/FelipeBergaminDantas/frontend-climatech",
    },
    image: "/images/projects/climatech.svg",
    highlights: {
      pt: [
        "3º lugar na ExpoTech",
        "Arquitetura full stack",
        "Dashboards e monitoramento em tempo real"
      ],
      en: [
        "3rd place at ExpoTech",
        "Full stack architecture",
        "Real-time monitoring and dashboards"
      ],
    },
  },
  {
    id: "qualidade-dados",
    slug: "qualidade-dados",
    category: "data",
    featured: true,
    title: {
      pt: "Qualidade de Dados",
      en: "Data Quality",
    },
    shortDescription: {
      pt: "Solução automatizada de monitoramento da qualidade dos dados, com regras de negócio, alertas automáticos e acompanhamento analítico.",
      en: "Automated solution for monitoring data quality, with business rules, automatic alerts and analytical tracking.",
    },
    description: {
      pt: "Solução automatizada de monitoramento da qualidade dos dados, desenvolvida para identificar anomalias através de regras de negócio, gerar alertas automáticos e disponibilizar análises para acompanhamento dos indicadores.",
      en: "Automated solution for monitoring data quality, designed to identify anomalies through business rules, generate automatic alerts and provide analyses for monitoring key indicators.",
    },
    stack: ["Python", "SQL Server", "Power BI", "Power Automate"],
    links: {},
    details: {
      pt: [
        "Projeto desenvolvido para criação de uma solução automatizada de monitoramento da qualidade dos dados, com o objetivo de identificar possíveis anomalias em informações estratégicas através de regras de negócio definidas.",
        "A solução realizava o processamento diário dos dados, aplicando validações para identificar inconsistências relacionadas a indicadores como vendas, faturamento e cancelamentos. Os resultados das análises eram armazenados em uma estrutura de banco de dados própria, permitindo histórico, rastreabilidade e acompanhamento das ocorrências identificadas.",
        "Como parte do processo, foram desenvolvidos mecanismos de automação para envio de alertas via e-mail, Microsoft Teams e Power Automate, disponibilizando resumos diários com os registros classificados como possíveis anomalias e dados dentro dos padrões esperados.",
        "Além disso, foi criado um dashboard de acompanhamento para análise dos indicadores de qualidade, histórico de alertas e monitoramento das ocorrências, proporcionando maior visibilidade e agilidade na identificação de problemas relacionados aos dados."
      ],
      en: [
        "Project developed to create an automated solution for monitoring data quality, with the goal of identifying possible anomalies in strategic information through defined business rules.",
        "The solution processed data daily, applying validations to identify inconsistencies related to indicators such as sales, revenue and cancellations. The analysis results were stored in a dedicated database structure, enabling history, traceability and monitoring of identified occurrences.",
        "As part of the process, automation mechanisms were developed to send alerts through email, Microsoft Teams and Power Automate, providing daily summaries with records classified as possible anomalies and data within expected standards.",
        "In addition, a monitoring dashboard was created to analyze quality indicators, alert history and occurrence tracking, providing greater visibility and speed in identifying data-related issues."
      ],
    },
    detailHighlights: {
      pt: [
        "Desenvolvimento de processos automatizados de validação de dados",
        "Criação de regras de negócio para identificação de anomalias",
        "Estruturação de banco de dados para armazenamento dos resultados",
        "Automação de alertas com Power Automate e notificações via e-mail e Microsoft Teams",
        "Desenvolvimento de dashboard analítico para acompanhamento"
      ],
      en: [
        "Development of automated data validation processes",
        "Creation of business rules to identify anomalies",
        "Structuring of a database to store analysis results",
        "Automation of alerts with Power Automate and notifications via email and Microsoft Teams",
        "Development of an analytical dashboard for monitoring"
      ],
    },
    image: "/images/projects/qualidade-dados.svg",
    highlights: {
      pt: ["Monitoramento automatizado", "Regras de negócio", "Alertas e dashboards"],
      en: ["Automated monitoring", "Business rules", "Alerts and dashboards"],
    },
  },
  {
    id: "precificacao",
    slug: "precificacao",
    category: "data",
    featured: true,
    title: {
      pt: "Precificação",
      en: "Pricing",
    },
    shortDescription: {
      pt: "Automação de um processo de precificação anteriormente realizado manualmente, envolvendo integração de dados, estruturação de banco de dados dimensional e criação de dashboards analíticos.",
      en: "Automation of a pricing process previously performed manually, involving data integration, dimensional database structuring and analytical dashboard creation.",
    },
    description: {
      pt: "Projeto desenvolvido com o objetivo de automatizar e estruturar o processo de precificação de produtos, substituindo atividades manuais realizadas por meio de arquivos Excel por um fluxo automatizado de processamento e análise de dados.",
      en: "Project developed to automate and structure the product pricing process, replacing manual activities carried out through Excel files with an automated workflow for data processing and analysis.",
    },
    stack: ["Python", "SQL Server", "Power BI", "ETL"],
    links: {},
    details: {
      pt: [
        "Foi desenvolvido um processo de integração responsável por coletar automaticamente os dados provenientes de planilhas, realizar o tratamento das informações e disponibilizá-las em um banco de dados estruturado.",
        "A base foi organizada utilizando conceitos de modelagem dimensional, com criação de tabelas estruturadas e procedimentos automatizados para atualização dos dados, garantindo maior organização, confiabilidade e eficiência no processo.",
        "Como etapa final, foram desenvolvidos dashboards analíticos no Power BI para acompanhamento dos indicadores relacionados à precificação dos produtos, permitindo uma visão mais clara das informações e apoiando a tomada de decisão."
      ],
      en: [
        "An integration process was developed to automatically collect data from spreadsheets, process the information and make it available in a structured database.",
        "The data model was organized using dimensional modeling concepts, with structured tables and automated procedures for updating data, ensuring better organization, reliability and efficiency.",
        "As a final step, analytical dashboards were developed in Power BI to monitor pricing-related indicators, providing clearer visibility and supporting decision-making."
      ],
    },
    detailHighlights: {
      pt: [
        "Automação do processo de atualização dos dados de precificação",
        "Desenvolvimento de pipeline de integração entre arquivos Excel e banco de dados",
        "Estruturação de modelo dimensional",
        "Criação de procedimentos automatizados para atualização das informações",
        "Desenvolvimento de dashboards estratégicos no Power BI",
        "Redução de atividades manuais no processo analítico"
      ],
      en: [
        "Automation of the pricing data refresh process",
        "Development of an integration pipeline between Excel files and the database",
        "Structuring of a dimensional model",
        "Creation of automated procedures to update information",
        "Development of strategic dashboards in Power BI",
        "Reduction of manual activities in the analytical process"
      ],
    },
    image: "/images/projects/precificacao.svg",
    highlights: {
      pt: ["Automação de atualização de dados", "Integração entre Excel e banco", "Dashboards estratégicos"],
      en: ["Automated data refresh", "Excel-to-database integration", "Strategic dashboards"],
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
      pt: "Landing page institucional desenvolvida para uma consultoria especializada em performance para vendedores do Mercado Livre, com o objetivo de apresentar seus serviços, resultados e fortalecer sua presença digital. O projeto foi construído com uma interface moderna, responsiva e orientada à conversão de clientes, destacando a proposta de valor da empresa e proporcionando uma experiência de navegação intuitiva.",
      en: "Institutional landing page developed for a consultancy specialized in performance for Mercado Livre sellers, with the goal of presenting its services, results and strengthening its digital presence. The project was built with a modern, responsive interface focused on customer conversion, highlighting the company's value proposition and providing an intuitive browsing experience.",
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
      demo: "https://robo-entregador-demo-one.vercel.app/",
      github: "https://github.com/FelipeBergaminDantas/robo-entregador",
    },
    image: "/images/projects/robot.svg",
    highlights: {
      pt: ["Automação orientada a operação", "Arquitetura prática", "Visão sistêmica"],
      en: ["Operations-oriented automation", "Practical architecture", "Systemic vision"],
    },
  },
];
