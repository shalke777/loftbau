"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BeforeAfter from "./BeforeAfter";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Locale = "pl" | "en";

type Content = {
  nav: {
    projects: string;
    process: string;
    materials: string;
    contact: string;
    consultation: string;
  };
  language: {
    pl: string;
    en: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    services: string[];
  };
  positioning: {
    eyebrow: string;
    title: string;
    body: string;
  };
  specialization: {
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  };
  executionSystem: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { num: string; title: string; desc: string }[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    body: string;
    projectLabel: string;
    items: { title: string; detail: string }[];
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    body: string;
    beforeLabel: string;
    afterLabel: string;
    beforeBadge: string;
    afterBadge: string;
    ariaLabel: string;
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    items: { step: string; title: string; detail: string }[];
  };
  materials: {
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  };
  trust: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
    testimonials: { quote: string; author: string }[];
  };
  seo: {
    eyebrow: string;
    title: string;
    body: string;
    districts: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
  };
  structuredDataDescription: string;
  structuredDataServices: string[];
};

const content: Record<Locale, Content> = {
  pl: {
    nav: {
      projects: "Projekty",
      process: "Proces",
      materials: "System",
      contact: "Kontakt",
      consultation: "Konsultacja",
    },
    language: {
      pl: "PL",
      en: "ENG",
    },
    hero: {
      eyebrow: "Master Glazurnik — Kraków",
      title: "Perfekcyjne wykonanie łazienek premium w rzeczywistości.",
      body: "Pełna odpowiedzialność za realizację łazienek. Od przygotowania, hydroizolacji, glazury do integracji instalacji i wykończenia. Wykonawca, nie projektant.",
      ctaPrimary: "Umów konsultację",
      ctaSecondary: "Zobacz portfolio",
      services: [
        "Mistrz glazurnictwa",
        "Systemy łazienek premium",
        "Wykonanie end-to-end",
        "Precisja techniczna",
      ],
    },
    positioning: {
      eyebrow: "Nasza misja",
      title: "Nie projektujemy. Realizujemy.",
      body: "LOFTBAU to atelier wykonańskiego rzemiosła. Bierzemy pełną odpowiedzialność za finalny wynik fizyczny. Każda łazienka to system techniczno-estetyczny, a my kontrolujemy każdy element od przygotowania podłoża do ostatniego szlifu.",
    },
    specialization: {
      eyebrow: "Specjalizacja",
      title: "Luxury bathroom execution w najwyższym standardzie.",
      body: "Nasze doświadczenie:",
      items: [
        "Wykonanie łazienek premium — od A do Z",
        "Glazurnictwo precyzyjne (wszystkie formaty, w tym XXL)",
        "Waterproofing i systemy hydrauliczne",
        "Elektyka i instalacja w systemie łazienki",
        "Gładzie natryskowe i malowania natryskowe",
        "Wykończenia na najwyższym poziomie",
      ],
    },
    executionSystem: {
      eyebrow: "System realizacji",
      title: "Łazienka jako system techniczny.",
      body: "Każdy etap ma znaczenie. Kontrolujemy wszystko.",
      steps: [
        { num: "01", title: "Przygotowanie", desc: "Analiza warunków, przygotowanie podłoża, planowanie systemu." },
        { num: "02", title: "Hydroizolacja", desc: "Pełna ochrona wodoszczelna — system bezpieczeństwa łazienki." },
        { num: "03", title: "Glazura", desc: "Precyzyjna instalacja płytek — wszystkie formaty, perfekcyjne fuge." },
        { num: "04", title: "Instalacja", desc: "Integracja wyposażenia, armatur, oświetlenia i systemów." },
        { num: "05", title: "Wykończenie", desc: "Ostateczna kalibracja detali, czyszczenie, odbiór techniczny." },
      ],
    },
    showcase: {
      eyebrow: "Realizacje",
      title: "Rzeczywistości. Bez renderów.",
      body: "Tylko skończone, zabudowane łazienki. Dokumentacja z budowy i finału. Dowód precyzji wykonania.",
      projectLabel: "Projekt",
      items: [
        {
          title: "Penthouse | Wielkoformatowy system",
          detail: "Płytki 1,5m × 2m, rozwiązanie fugi ukryte, integracja oświetlenia — pełna realizacja systemu.",
        },
        {
          title: "Rezydencja | Ceramic XXL + Hydroizolacja",
          detail: "System zaawansowanej hydroizolacji, montaż płytek giganta, perfekcja granic i przejść.",
        },
        {
          title: "Apartament | Precision Tiling System",
          detail: "Naturalne kamienie, precyzyjne fige, integracja z systemem grzewczym podłogi.",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Przed / Po",
      title: "Różnica między amatorą a mistrzem.",
      body: "Jakość wykonania zmienia wszystko. Perfekcja fugi, precyzja płytek, integracja systemów — to widać.",
      beforeLabel: "Niedbałe przejścia, asymetryczne fuge, widoczne wady.",
      afterLabel: "Monolityczna precyzja, doskonałe linie, hotelowy standard.",
      beforeBadge: "Przed",
      afterBadge: "Po",
      ariaLabel: "Porównanie przed i po",
    },
    process: {
      eyebrow: "Ścieżka klienta",
      title: "Od konsultacji do odbioru — pełna kontrola.",
      body: "Transparentne etapy, zdyscyplinowana realizacja i bezpośrednia komunikacja przez cały projekt.",
      items: [
        {
          step: "01",
          title: "Konsultacja techniczna",
          detail: "Ocena warunków, specyfikacja systemu, harmonogram, budżet precyzyjnie.",
        },
        {
          step: "02",
          title: "Pomiar i planowanie",
          detail: "Pomiary precyzyjne, plan hydro, specyfikacja materiałów, harmonogram realizacji.",
        },
        {
          step: "03",
          title: "Realizacja i nadzór",
          detail: "Każdy etap kontrolowany. Hydro, glazura, instalacja — standard mistrza.",
        },
        {
          step: "04",
          title: "Odbór i dokumentacja",
          detail: "Inspekcja każdego detalu. Dokumentacja fotograficzna, gwarancja wykonania.",
        },
      ],
    },
    materials: {
      eyebrow: "System techniczny",
      title: "Materiały kontrolowane i zintegrowane.",
      body: "Pracujemy z systemami hydroizolacji premium, płytkami wszystkich formatów (XXL włącznie), naturalnymi kamieniami i najlepszymi armaturami/oświetleniem. Każdy element musi grać razem.",
      items: ["Hydroizolacja", "Płytki XL", "Naturalne kamienie", "Armatura & Oświetlenie"],
    },
    trust: {
      eyebrow: "Zaufanie",
      title: "Klienci, którzy wiedzą, że wymagają mistrza.",
      body: "Pracujemy dla właścicieli apartamentów premium, inwestorów wymagających i architektów szukających niezawodnego wykonawcy.",
      stats: [
        { value: "150+", label: "łazienek zrealizowanych" },
        { value: "12", label: "lat na rynku premium" },
        { value: "98%", label: "klientów z polecenia" },
      ],
      testimonials: [
        {
          quote:
            "LOFTBAU wziął pełną odpowiedzialność za każdy aspekt. Łazienka wygląda jak z hotelowego rezortu.",
          author: "Inwestor, Wola Justowska",
        },
        {
          quote:
            "Precyzja wykonania i odpowiedzialność — dokładnie to, czego szukałem. Mistrz z dużym M.",
          author: "Właściciel penthouse, Stare Miasto",
        },
      ],
    },
    seo: {
      eyebrow: "Local SEO",
      title: "Master glazurnik Kraków — pełna realizacja łazienek.",
      body: "Specjalizujemy się w: luxury bathroom execution Krakow, master glazurnik Krakow, premium tiling Krakow, end-to-end bathroom realization Krakow, precision bathroom execution.",
      districts:
        "Projekty: Stare Miasto, Wola Justowska, Dębniki, Kazimierz, Żablocie oraz nowoczesne inwestycje premium w całym Krakowie.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Zapytaj mistrza.",
      body: "Opisz swoją łazienkę, harmonogram i oczekiwania. Wrocimy z konkretnym planem technicznym i wyceną. Konsultacja bezpłatna.",
    },
    structuredDataDescription:
      "Master glazurnik i pełna realizacja łazienek premium w Krakowie. Wykonawca od A do Z.",
    structuredDataServices: [
      "Pełna realizacja łazienek premium",
      "Glazurnictwo precyzyjne",
      "Systemy hydroizolacji",
      "Wykończenia na najwyższym poziomie",
    ],
  },
  en: {
    nav: {
      projects: "Projects",
      process: "Process",
      materials: "System",
      contact: "Contact",
      consultation: "Consultation",
    },
    language: {
      pl: "PL",
      en: "ENG",
    },
    hero: {
      eyebrow: "Master Glazurnik — Kraków",
      title: "Perfect bathroom execution in reality.",
      body: "Full responsibility for bathroom realization. From prep, waterproofing, tiling to plumbing integration and finishing. Executor, not designer.",
      ctaPrimary: "Book consultation",
      ctaSecondary: "Explore portfolio",
      services: [
        "Master glazurnik",
        "Premium bathroom systems",
        "End-to-end execution",
        "Technical precision",
      ],
    },
    positioning: {
      eyebrow: "Our mission",
      title: "We don't design. We execute.",
      body: "LOFTBAU is an atelier of execution craftsmanship. We take full responsibility for the final physical result. Every bathroom is a technical-aesthetic system, and we control every element from substrate prep to final polish.",
    },
    specialization: {
      eyebrow: "Specialization",
      title: "Luxury bathroom execution at the highest standard.",
      body: "Our expertise:",
      items: [
        "Premium bathroom realization — A to Z",
        "Precision tiling (all formats, including XXL)",
        "Waterproofing and hydraulic systems",
        "Electrical and plumbing integration",
        "Spray plastering and spray painting",
        "Finishing at the highest level",
      ],
    },
    executionSystem: {
      eyebrow: "Execution system",
      title: "Bathroom as a technical system.",
      body: "Every stage matters. We control everything.",
      steps: [
        { num: "01", title: "Preparation", desc: "Site assessment, substrate prep, system planning." },
        { num: "02", title: "Waterproofing", desc: "Full waterproof protection — bathroom safety system." },
        { num: "03", title: "Tiling", desc: "Precision tile installation — all formats, perfect grout." },
        { num: "04", title: "Integration", desc: "Equipment, fixtures, lighting, and system integration." },
        { num: "05", title: "Finishing", desc: "Final detail calibration, cleaning, technical handover." },
      ],
    },
    showcase: {
      eyebrow: "Projects",
      title: "Reality. No renders.",
      body: "Only finished, built bathrooms. Documentation from construction to completion. Proof of execution precision.",
      projectLabel: "Project",
      items: [
        {
          title: "Penthouse | Large-format system",
          detail: "1.5m × 2m tiles, concealed grout solution, lighting integration — full system realization.",
        },
        {
          title: "Residence | Ceramic XXL + Waterproofing",
          detail: "Advanced waterproofing system, giant tile installation, perfect boundaries and transitions.",
        },
        {
          title: "Apartment | Precision tiling system",
          detail: "Natural stone, precise grout joints, floor heating integration.",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Before / After",
      title: "The difference between amateur and master.",
      body: "Execution quality changes everything. Perfect grout, precise tiles, system integration — you can see it.",
      beforeLabel: "Careless transitions, asymmetric grout, visible defects.",
      afterLabel: "Monolithic precision, perfect lines, resort standard.",
      beforeBadge: "Before",
      afterBadge: "After",
      ariaLabel: "Before and after comparison",
    },
    process: {
      eyebrow: "Client journey",
      title: "From consultation to handover — full control.",
      body: "Transparent milestones, disciplined execution, and direct communication throughout the project.",
      items: [
        {
          step: "01",
          title: "Technical consultation",
          detail: "Site assessment, system specification, timeline, precise budget.",
        },
        {
          step: "02",
          title: "Measurement and planning",
          detail: "Precision measurements, waterproofing plan, material spec, execution timeline.",
        },
        {
          step: "03",
          title: "Execution and supervision",
          detail: "Every stage controlled. Waterproofing, tiling, installation — master standard.",
        },
        {
          step: "04",
          title: "Handover and documentation",
          detail: "Inspection of every detail. Photo documentation, execution warranty.",
        },
      ],
    },
    materials: {
      eyebrow: "Technical system",
      title: "Materials controlled and integrated.",
      body: "We work with premium waterproofing systems, tiles in all formats (XXL included), natural stones, and the finest fixtures/lighting. Every element must work together.",
      items: ["Waterproofing", "XL Tiles", "Natural Stone", "Fixtures & Lighting"],
    },
    trust: {
      eyebrow: "Trust",
      title: "Clients who know they need a master.",
      body: "We work for premium apartment owners, investors with high standards, and architects seeking a reliable executor.",
      stats: [
        { value: "150+", label: "bathrooms realized" },
        { value: "12", label: "years in premium market" },
        { value: "98%", label: "clients from referral" },
      ],
      testimonials: [
        {
          quote:
            "LOFTBAU took full responsibility for every aspect. The bathroom looks like a resort.",
          author: "Investor, Wola Justowska",
        },
        {
          quote:
            "Precision execution and accountability — exactly what I was looking for. Master with capital M.",
          author: "Penthouse owner, Stare Miasto",
        },
      ],
    },
    seo: {
      eyebrow: "Local SEO",
      title: "Master glazurnik Krakow — full bathroom realization.",
      body: "We specialize in: luxury bathroom execution Krakow, master glazurnik Krakow, premium tiling Krakow, end-to-end bathroom realization Krakow, precision bathroom execution.",
      districts:
        "Projects: Stare Miasto, Wola Justowska, Dębniki, Kazimierz, Żablocie, and premium investment apartments across Krakow.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Ask the master.",
      body: "Describe your bathroom, timeline, and expectations. We'll return with a concrete technical plan and quote. Free consultation.",
    },
    structuredDataDescription:
      "Master glazurnik and full premium bathroom realization in Krakow. Executor A to Z.",
    structuredDataServices: [
      "Full premium bathroom realization",
      "Precision tiling",
      "Waterproofing systems",
      "Finishing at the highest level",
    ],
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve } },
};

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-3xl space-y-5">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">{eyebrow}</p>
      <h2 className="headline text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{body}</p>
    </div>
  );
}

export default function LoftbauPage({ locale = "pl" }: { locale?: Locale }) {
  const t = content[locale];
  const isPl = locale === "pl";

  return (
    <div className="noise min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="headline text-sm tracking-[0.3em] text-[var(--foreground)]" href="#hero">
            LOFTBAU
          </a>
          <div className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
            <a href="#showcase">{t.nav.projects}</a>
            <a href="#process">{t.nav.process}</a>
            <a href="#materials">{t.nav.materials}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition ${
                isPl
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/20 text-white/70 hover:border-white/40"
              }`}
            >
              {t.language.pl}
            </Link>
            <Link
              href="/en"
              className={`rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] transition ${
                !isPl
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/20 text-white/70 hover:border-white/40"
              }`}
            >
              {t.language.en}
            </Link>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--foreground)] transition hover:border-white/45"
            >
              {t.nav.consultation}
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8">
        <motion.section
          id="hero"
          className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6 sm:p-12"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(216,203,184,0.25),transparent_38%),linear-gradient(165deg,#18181b_0%,#101011_55%,#0d0d0e_100%)]" />
          <motion.div
            className="absolute -right-16 top-20 h-56 w-56 rounded-full border border-white/15 bg-white/5 blur-2xl"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 max-w-4xl space-y-8">
            <motion.p variants={item} className="text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]">
              {t.hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={item}
              className="headline text-4xl leading-[1.02] sm:text-6xl md:text-7xl"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p variants={item} className="max-w-2xl text-sm leading-7 text-white/75 sm:text-lg">
              {t.hero.body}
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-white/70">
              {t.hero.services.map((service) => (
                <span key={service} className="rounded-full border border-white/20 px-3 py-1">
                  {service}
                </span>
              ))}
            </motion.div>
            <motion.div variants={item} className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[var(--foreground)] px-7 py-3 text-center text-xs uppercase tracking-[0.2em] text-[#121212]"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#showcase"
                className="rounded-full border border-white/20 px-7 py-3 text-center text-xs uppercase tracking-[0.2em] text-[var(--foreground)]"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-20 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.positioning.eyebrow}
              title={t.positioning.title}
              body={t.positioning.body}
            />
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-20 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.specialization.eyebrow}
              title={t.specialization.title}
              body={t.specialization.body}
            />
            <motion.ul variants={item} className="mt-6 max-w-2xl space-y-2">
              {t.specialization.items.map((listItem) => (
                <li key={listItem} className="flex items-start gap-3">
                  <span className="text-[var(--muted)]">→</span>
                  <span className="text-sm text-white/75">{listItem}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-20 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.executionSystem.eyebrow}
              title={t.executionSystem.title}
              body={t.executionSystem.body}
            />
          </motion.div>
          <motion.div variants={item} className="grid gap-5 md:grid-cols-5">
            {t.executionSystem.steps.map((step) => (
              <article key={step.num} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="headline text-xs tracking-[0.2em] text-[var(--muted)]">{step.num}</p>
                <h3 className="headline mt-3 text-lg">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/70">{step.desc}</p>
              </article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="showcase"
          className="mt-24 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.showcase.eyebrow}
              title={t.showcase.title}
              body={t.showcase.body}
            />
          </motion.div>
          <motion.div variants={item} className="grid gap-6 md:grid-cols-12">
            {t.showcase.items.map((project, index) => (
              <article
                key={project.title}
                className={`rounded-3xl border border-white/10 p-6 ${
                  index === 0 ? "md:col-span-7 min-h-[330px]" : "md:col-span-5 min-h-[250px]"
                } bg-[linear-gradient(135deg,#1f2023_0%,#141416_70%)]`}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                  {t.showcase.projectLabel} {index + 1}
                </p>
                <h3 className="headline mt-5 text-2xl sm:text-3xl">{project.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/70 sm:text-base">{project.detail}</p>
              </article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-24 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.beforeAfter.eyebrow}
              title={t.beforeAfter.title}
              body={t.beforeAfter.body}
            />
          </motion.div>
          <motion.div variants={item}>
            <BeforeAfter
              beforeLabel={t.beforeAfter.beforeLabel}
              afterLabel={t.beforeAfter.afterLabel}
              beforeBadge={t.beforeAfter.beforeBadge}
              afterBadge={t.beforeAfter.afterBadge}
              ariaLabel={t.beforeAfter.ariaLabel}
            />
          </motion.div>
        </motion.section>

        <motion.section
          id="process"
          className="mt-24 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.process.eyebrow}
              title={t.process.title}
              body={t.process.body}
            />
          </motion.div>
          <motion.div variants={item} className="grid gap-5 md:grid-cols-2">
            {t.process.items.map((phase) => (
              <article key={phase.step} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="headline text-sm tracking-[0.2em] text-[var(--muted)]">{phase.step}</p>
                <h3 className="headline mt-4 text-2xl">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{phase.detail}</p>
              </article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="materials"
          className="mt-24 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.materials.eyebrow}
              title={t.materials.title}
              body={t.materials.body}
            />
          </motion.div>
          <motion.div variants={item} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {t.materials.items.map((material) => (
              <div key={material} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-8 text-center">
                <p className="headline text-lg">{material}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-24 space-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item}>
            <SectionTitle
              eyebrow={t.trust.eyebrow}
              title={t.trust.title}
              body={t.trust.body}
            />
          </motion.div>
          <motion.div variants={item} className="grid gap-4 sm:grid-cols-3">
            {t.trust.stats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="headline text-4xl text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/65">{stat.label}</p>
              </article>
            ))}
          </motion.div>
          <motion.div variants={item} className="grid gap-4 md:grid-cols-2">
            {t.trust.testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-sm leading-7 text-white/78 sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-24 rounded-3xl border border-white/10 bg-[linear-gradient(130deg,#151517_0%,#0d0d0e_100%)] p-8 sm:p-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={item} className="space-y-6">
            <SectionTitle
              eyebrow={t.seo.eyebrow}
              title={t.seo.title}
              body={t.seo.body}
            />
            <p className="max-w-4xl text-sm leading-7 text-white/70 sm:text-base">
              {t.seo.districts}
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="mt-24 rounded-3xl border border-[#d5c8b530] bg-[linear-gradient(150deg,#211f1b_0%,#141312_100%)] p-8 sm:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">{t.contact.eyebrow}</p>
          <h2 className="headline mt-5 max-w-4xl text-3xl leading-tight sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            {t.contact.body}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-full bg-[var(--foreground)] px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-black"
              href="mailto:kontakt@loftbau-krakow.pl"
            >
              kontakt@loftbau-krakow.pl
            </a>
            <a
              className="rounded-full border border-white/25 px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-[var(--foreground)]"
              href="tel:+48123456789"
            >
              +48 123 456 789
            </a>
          </div>
        </motion.section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "LOFTBAU Krakow",
            areaServed: "Krakow",
            description: t.structuredDataDescription,
            serviceType: t.structuredDataServices,
            url: isPl ? "https://loftbau-krakow.pl" : "https://loftbau-krakow.pl/en",
          }),
        }}
      />
    </div>
  );
}
