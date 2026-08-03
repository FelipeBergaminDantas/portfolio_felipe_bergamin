# Portfolio - Felipe Bergamin Dantas

Portfólio profissional desenvolvido em Next.js 16 com TypeScript, apresentando projetos de análise de dados, engenharia de dados e desenvolvimento de software.

## 🎯 Sobre

Este é um portfólio moderno e responsivo que apresenta:

- **Projetos de Dados**: Qualidade de Dados, Precificação
- **Projetos de Software**: ClimaTech (full stack), Max Solutions & Performance, Robô Entregador
- **Seções**: Hero, Sobre, Especialização, Competências, Projetos e Contato
- **Internacionalização**: Suporte completo para português e inglês
- **Design**: Interface moderna com animações Framer Motion e Tailwind CSS

## 🚀 Funcionalidades

- ✅ Seção de projetos com cards expansíveis para detalhes
- ✅ Suporte para múltiplos idiomas (PT-BR e EN-US)
- ✅ Demonstração e repositório de projetos com links customizados
- ✅ Dashboard de competências e skills
- ✅ Formulário de contato com integração via WhatsApp e e-mail
- ✅ Animações suaves com Framer Motion
- ✅ Design responsivo (desktop, tablet, mobile)
- ✅ Otimização de performance com Next.js

## 📦 Tech Stack

- **Framework**: Next.js 16.2.12
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React, FontAwesome
- **Forms**: React Hook Form, Zod
- **Email**: Resend
- **Internationalization**: next-intl

## 🛠️ Como Rodar

### Pré-requisitos
- Node.js 18+
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone <seu-repo>
cd portfolio

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas e layouts (Next.js App Router)
├── components/             # Componentes reutilizáveis
│   ├── navigation/         # Navbar
│   ├── portfolio/          # PortfolioShell
│   └── ui/                 # Button, Badge, Container, SectionTitle
├── features/               # Componentes da página
│   ├── about/              # Seção Sobre
│   ├── contact/            # Seção Contato
│   ├── expertise/          # Seção Especialização
│   ├── footer/             # Rodapé
│   ├── hero/               # Seção Hero
│   ├── projects/           # Seção Projetos
│   └── skills/             # Seção Competências
├── data/                   # Dados estáticos (projetos, navegação, etc)
├── lib/                    # Utilitários (i18n, utils)
├── types/                  # TypeScript types
└── config/                 # Configurações (site.ts)
locales/                    # Arquivos de tradução (pt-BR.json, en-US.json)
public/                     # Arquivos estáticos (imagens, SVGs)
```

## 🎨 Customização

### Adicionar Novo Projeto

Edite `src/data/projects.ts`:

```typescript
{
  id: "seu-projeto",
  slug: "seu-projeto",
  category: "software" | "data",
  featured: true,
  title: { pt: "Título PT", en: "Título EN" },
  description: { pt: "...", en: "..." },
  stack: ["Tech1", "Tech2"],
  links: { app?: "...", demo?: "...", github?: "..." },
  image: "/images/projects/seu-projeto.svg",
  highlights: { pt: ["..."], en: ["..."] }
}
```

### Idiomas

As traduções estão em `locales/`:
- `pt-BR.json` - Português (Brasil)
- `en-US.json` - Inglês (EUA)

## 📝 Linting

```bash
npm run lint
```

## 📄 Licença

Projeto pessoal - Felipe Bergamin Dantas

