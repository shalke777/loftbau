"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    items: { title: string; desc: string }[];
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
    items: { title: string; detail: string; image?: string }[];
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
      projects: "Realizacje",
      process: "Proces",
      materials: "Zakres",
      contact: "Kontakt",
      consultation: "Wycena",
    },
    language: {
      pl: "PL",
      en: "ENG",
    },
    hero: {
      eyebrow: "LOFTBAU — Kraków",
      title: "Wykonujemy łazienki.",
      body: "Firma wykonawcza z Krakowa. Realizujemy łazienki od stanu surowego do odbioru — w tym glazurnictwo, hydroizolację, prace instalacyjne i wykończeniowe.",
      ctaPrimary: "Zapytaj o wycenę",
      ctaSecondary: "Zobacz realizacje",
      services: [
        "Łazienki pod klucz",
        "Glazurnictwo",
        "Instalacje wod-kan i elektryczne",
        "Prace natryskowe",
      ],
    },
    positioning: {
      eyebrow: "O firmie",
      title: "Robimy łazienki. Od początku do końca.",
      body: "LOFTBAU to firma wykonawcza Pawła Szaleckiego, wyspecjalizowana w łazienkach. Pracujemy od stanu surowego do odbioru technicznego. Realizujemy projekty klientów lub pomagamy ustalić zakres — nie projektujemy, wykonujemy. Właściciel jest mistrzem glazurnikiem z wieloletnim doświadczeniem w robotach wykończeniowych.",
    },
    specialization: {
      eyebrow: "Zakres",
      title: "Co wykonujemy.",
      body: "Pełny zakres prac łazienkowych:",
      items: [
        {
          title: "Kompleksowe wykonanie łazienek",
          desc: "Realizujemy łazienki pod klucz od stanu surowego do odbioru technicznego. Zakres obejmuje hydroizolację, glazurę, instalacje wod-kan i elektryczne, wykończenie oraz montaż armatury premium w Krakowie i okolicach.",
        },
        {
          title: "Glazurnictwo i płytki wielkoformatowe",
          desc: "Montaż gresu rektyfikowanego, spieków kwarcowych i płyt 120×280. Precyzyjna obróbka narożników, estetyczne fugowanie i zachowanie idealnych płaszczyzn — standard każdej realizacji premium.",
        },
        {
          title: "Instalacje wod-kan w obrębie łazienki",
          desc: "Zmiana i rozprowadzenie pionów, podejścia pod armaturę premium, montaż odpływów liniowych i systemów podtynkowych Geberit. Profesjonalna hydroizolacja podłogi i ścian w strefach mokrych i kabinach walk-in.",
        },
        {
          title: "Instalacje elektryczne w obrębie łazienki",
          desc: "Instalacje pod oświetlenie podtynkowe LED, gniazda IP44, ogrzewanie podłogowe elektryczne i sterowanie oświetleniem strefowym. Prace wykonywane zgodnie z normami dla stref mokrych.",
        },
        {
          title: "Gładzie natryskowe",
          desc: "Maszynowe gładzie natryskowe zapewniające idealnie równe płaszczyzny pod glazurę lub malowanie. Precyzyjne przygotowanie podłoża to podstawa trwałości każdej nowoczesnej łazienki premium.",
        },
        {
          title: "Malowanie natryskowe",
          desc: "Natrysk maszynowy farbami do stref wilgotnych — równomierne krycie, gładka faktura bez śladów wałka. Stosujemy materiały odporne na parę i wilgoć, dopuszczone do stosowania w łazienkach.",
        },
      ],
    },
    executionSystem: {
      eyebrow: "Jak pracujemy",
      title: "Etapy realizacji.",
      body: "Pięć etapów. Każdy uzgodniony z klientem przed rozpoczęciem prac.",
      steps: [
        { num: "01", title: "Wycena", desc: "Spotkanie na miejscu, pomiar, ustalenie zakresu i harmonogramu." },
        { num: "02", title: "Instalacje", desc: "Prace hydrauliczne, elektryczne, hydroizolacja podłogi i ścian." },
        { num: "03", title: "Glazura", desc: "Układanie płytek — formaty standardowe i wielkoformatowe." },
        { num: "04", title: "Wykończenie", desc: "Gładzie, malowanie, montaż armatury i osprzętu." },
        { num: "05", title: "Odbiór", desc: "Sprzątanie po pracach, kontrola wykonania, przekazanie klientowi." },
      ],
    },
    showcase: {
      eyebrow: "Realizacje",
      title: "Wykonane łazienki. Zdjęcia z budowy.",
      body: "Pokazujemy realne realizacje — każda łazienka wykonana przez nas od stanu surowego. Bez wizualizacji i renderów.",
      projectLabel: "Realizacja",
      items: [
        {
          title: "Łazienka — apartament, Kraków",
          detail: "Płytki wielkoformatowe, prysznic walk-in, ogrzewanie podłogowe, pełny zakres instalacji.",
          image: "/realizacja-1.jpg",
        },
        {
          title: "Łazienka — dom jednorodzinny",
          detail: "Kamień naturalny na ścianach, wanna wolnostojąca, oświetlenie podtynkowe.",
          image: "/realizacja-2.jpg",
        },
        {
          title: "Łazienka — mieszkanie deweloperskie",
          detail: "Stan deweloperski do odbioru. Glazura, instalacje wod-kan i elektryczne, malowanie.",
          image: "/realizacja-3.jpg",
        },
        {
          title: "Łazienka — kamienica, Kraków",
          detail: "Pełny zakres od stanu surowego. Glazura, instalacje, wykończenie.",
          image: "/realizacja-4.jpg",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Przed / Po",
      title: "Stan wyjściowy i po zakończeniu prac.",
      body: "Porównanie tego samego pomieszczenia przed rozpoczęciem prac i po odbiorze technicznym.",
      beforeLabel: "Stan wyjściowy — przed pracami.",
      afterLabel: "Po zakończeniu — gotowa łazienka.",
      beforeBadge: "Przed",
      afterBadge: "Po",
      ariaLabel: "Porównanie przed i po",
    },
    process: {
      eyebrow: "Współpraca",
      title: "Jak pracujemy z klientem.",
      body: "Bezpośredni kontakt, pisemna wycena, ustalony harmonogram. Bez pośredników.",
      items: [
        {
          step: "01",
          title: "Pierwszy kontakt",
          detail: "Krótka rozmowa lub mail. Ustalamy zakres i orientacyjny termin.",
        },
        {
          step: "02",
          title: "Spotkanie i wycena",
          detail: "Wizja lokalna, dokładne pomiary, pisemna wycena z wyszczególnionym zakresem.",
        },
        {
          step: "03",
          title: "Realizacja",
          detail: "Prace według harmonogramu. Stały kontakt z klientem w trakcie budowy.",
        },
        {
          step: "04",
          title: "Odbiór",
          detail: "Przegląd wykonania, usunięcie ewentualnych uwag, przekazanie łazienki.",
        },
      ],
    },
    materials: {
      eyebrow: "Materiały",
      title: "Z czym pracujemy.",
      body: "Pracujemy z materiałami od sprawdzonych dostawców. Służymy radą przy doborze — zakup po stronie klienta lub przez nas, według ustaleń.",
      items: ["Płytki ceramiczne", "Płytki wielkoformatowe", "Kamień naturalny", "Hydroizolacja"],
    },
    trust: {
      eyebrow: "Doświadczenie",
      title: "Liczby zamiast deklaracji.",
      body: "Pracujemy w Krakowie i okolicy. Większość nowych zleceń pochodzi z polecenia od poprzednich klientów.",
      stats: [
        { value: "150+", label: "wykonanych łazienek" },
        { value: "12", label: "lat doświadczenia" },
        { value: "98%", label: "zleceń z polecenia" },
      ],
      testimonials: [
        {
          quote:
            "Łazienka wykonana zgodnie z ustaleniami i w terminie. Komunikacja przez cały czas prac była szybka i konkretna.",
          author: "Klient prywatny, Wola Justowska",
        },
        {
          quote:
            "Solidne wykonanie, czyste prace, brak usterek po odbiorze. Polecam bez zastrzeżeń.",
          author: "Klient prywatny, Stare Miasto",
        },
      ],
    },
    seo: {
      eyebrow: "Obszar działania",
      title: "Wykonujemy łazienki w Krakowie i okolicy.",
      body: "Realizujemy łazienki w mieszkaniach, apartamentach i domach jednorodzinnych. Współpracujemy też z biurami projektowymi i deweloperami.",
      districts:
        "Kraków i okolice: Stare Miasto, Kazimierz, Podgórze, Dębniki, Wola Justowska, Bronowice, Zabierzów, Wieliczka.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Zapytaj mistrza.",
      body: "Opisz swoją łazienkę, harmonogram i oczekiwania. Wrócimy z konkretnym planem technicznym i wyceną. Konsultacja bezpłatna.",
    },
    structuredDataDescription:
      "LOFTBAU Paweł Szalecki — firma wykonawcza specjalizująca się w łazienkach. Mistrz glazurnik. Kraków i okolice.",
    structuredDataServices: [
      "Kompleksowe wykonanie łazienek",
      "Glazurnictwo i płytki wielkoformatowe",
      "Instalacje wod-kan i elektryczne w łazience",
      "Gładzie i malowanie natryskowe",
    ],
  },
  en: {
    nav: {
      projects: "Projects",
      process: "Process",
      materials: "Scope",
      contact: "Contact",
      consultation: "Quote",
    },
    language: {
      pl: "PL",
      en: "ENG",
    },
    hero: {
      eyebrow: "LOFTBAU — Kraków",
      title: "We build bathrooms.",
      body: "A bathroom execution company based in Kraków. We deliver bathrooms from shell condition to handover — tiling, waterproofing, plumbing, electrical and finishing included.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "See completed work",
      services: [
        "Full bathroom builds",
        "Tiling",
        "Plumbing and electrical",
        "Spray finishing",
      ],
    },
    positioning: {
      eyebrow: "About",
      title: "We build bathrooms. From start to finish.",
      body: "LOFTBAU is a bathroom execution company run by Paweł Szalecki. We take projects from shell condition to technical handover. We work from client designs or help define the scope — we don't design, we build. The company owner holds a master tiler qualification with many years of finishing works experience.",
    },
    specialization: {
      eyebrow: "Scope",
      title: "What we do.",
      body: "Full scope of bathroom works:",
      items: [
        {
          title: "Full bathroom builds",
          desc: "We deliver complete bathrooms from shell condition to technical handover. Scope covers waterproofing, tiling, plumbing, electrical, finishing and premium fixture installation across Kraków and nearby.",
        },
        {
          title: "Tiling, including large-format slabs",
          desc: "Installation of rectified tiles, quartz composites and large-format slabs up to 120×280. Precise corner cuts, tight grout lines and flat planes are the standard on every premium build.",
        },
        {
          title: "Plumbing inside the bathroom scope",
          desc: "Supply re-routing, connections for premium fixtures, linear drains and concealed Geberit systems. Professional waterproofing of floors and walls in wet zones and walk-in shower enclosures.",
        },
        {
          title: "Electrical inside the bathroom scope",
          desc: "Installations for recessed LED lighting, IP44 sockets, electric underfloor heating and zone lighting control. All work carried out to wet-room electrical standards.",
        },
        {
          title: "Spray plastering",
          desc: "Machine spray plastering produces perfectly flat surfaces for tiling or painting. Precise substrate preparation is the foundation of long-term durability in any modern premium bathroom.",
        },
        {
          title: "Spray painting",
          desc: "Machine spray application using moisture-resistant paints rated for bathroom use — even coverage, smooth finish, no roller marks. Materials tested for steam and humidity resistance.",
        },
      ],
    },
    executionSystem: {
      eyebrow: "How we work",
      title: "Stages of a build.",
      body: "Five stages. Each agreed with the client before work begins.",
      steps: [
        { num: "01", title: "Quote", desc: "On-site visit, measurements, scope and schedule agreed." },
        { num: "02", title: "Installations", desc: "Plumbing, electrical, floor and wall waterproofing." },
        { num: "03", title: "Tiling", desc: "Standard and large-format tile installation." },
        { num: "04", title: "Finishing", desc: "Plastering, painting, fixtures and fittings." },
        { num: "05", title: "Handover", desc: "Post-build clean, inspection, handover to client." },
      ],
    },
    showcase: {
      eyebrow: "Completed work",
      title: "Finished bathrooms. Site photos.",
      body: "Real builds — no renders or visualisations. Every bathroom was delivered by us from shell condition.",
      projectLabel: "Project",
      items: [
        {
          title: "Bathroom — apartment, Kraków",
          detail: "Large-format tiles, walk-in shower, underfloor heating, full installation scope.",
          image: "/realizacja-1.jpg",
        },
        {
          title: "Bathroom — single-family house",
          detail: "Natural stone walls, freestanding bathtub, recessed lighting.",
          image: "/realizacja-2.jpg",
        },
        {
          title: "Bathroom — developer-condition flat",
          detail: "From shell to handover. Tiling, plumbing, electrical, spray painting.",
          image: "/realizacja-3.jpg",
        },
        {
          title: "Bathroom — tenement building, Kraków",
          detail: "Full scope from shell condition. Tiling, installations, finishing.",
          image: "/realizacja-4.jpg",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Before / After",
      title: "Before works and after handover.",
      body: "The same room before works started and after the build was completed.",
      beforeLabel: "Initial condition — before works.",
      afterLabel: "Final condition — finished bathroom.",
      beforeBadge: "Before",
      afterBadge: "After",
      ariaLabel: "Before and after comparison",
    },
    process: {
      eyebrow: "Working together",
      title: "How we work with clients.",
      body: "Direct contact, written quote, schedule kept. No middlemen.",
      items: [
        {
          step: "01",
          title: "First contact",
          detail: "A short call or email. We agree scope and rough timing.",
        },
        {
          step: "02",
          title: "Site visit and quote",
          detail: "On-site measurements, written quote with detailed scope.",
        },
        {
          step: "03",
          title: "Build",
          detail: "Work runs to schedule. Regular client updates throughout.",
        },
        {
          step: "04",
          title: "Handover",
          detail: "Inspection, snag resolution, cleaning, handover to client.",
        },
      ],
    },
    materials: {
      eyebrow: "Materials",
      title: "What we work with.",
      body: "We work with materials from trusted suppliers. We can advise on selection — the client purchases directly or through us.",
      items: ["Ceramic tiles", "Large-format tiles", "Natural stone", "Waterproofing"],
    },
    trust: {
      eyebrow: "Experience",
      title: "Numbers instead of claims.",
      body: "We work in Kraków and the surrounding area. Most new projects come through referrals from previous clients.",
      stats: [
        { value: "150+", label: "bathrooms delivered" },
        { value: "12", label: "years of experience" },
        { value: "98%", label: "projects from referrals" },
      ],
      testimonials: [
        {
          quote:
            "Built as agreed and on schedule. Communication throughout the works was quick and straightforward.",
          author: "Private client, Wola Justowska",
        },
        {
          quote:
            "Solid work, clean site, no issues after handover. Recommended.",
          author: "Private client, Stare Miasto",
        },
      ],
    },
    seo: {
      eyebrow: "Where we work",
      title: "Bathroom builds in Kraków and nearby.",
      body: "We deliver bathrooms in flats, apartments and single-family houses. We also work with architects and developers.",
      districts:
        "Kraków and nearby: Stare Miasto, Kazimierz, Podgórze, Dębniki, Wola Justowska, Bronowice, Zabierzów, Wieliczka.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Ask the master.",
      body: "Describe your bathroom, timeline and expectations. We'll come back with a concrete technical plan and quote. Free consultation.",
    },
    structuredDataDescription:
      "LOFTBAU Paweł Szalecki — bathroom execution company. Master tiler. Kraków and nearby.",
    structuredDataServices: [
      "Full bathroom builds",
      "Tiling and large-format slabs",
      "Plumbing and electrical works",
      "Spray plastering and painting",
    ],
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeCurve } },
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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
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
          {/* Zdjęcie tła */}
          <Image
            src="/11.jpg"
            fill
            priority
            className="object-cover opacity-100"
            sizes="100vw"
            alt=""
          />
          {/* Gradient overlay góra→dół */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(10,10,11,0.6)_60%,rgba(10,10,11,0.97)_100%)]" />
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
            <motion.div variants={item} className="mt-8 max-w-2xl divide-y divide-white/[0.08]">
              {t.specialization.items.map((svcItem, idx) => (
                <div key={svcItem.title}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="flex w-full items-center justify-between py-5 text-left"
                    aria-expanded={openIndex === idx}
                  >
                    <h3 className="headline text-base text-[var(--foreground)]">{svcItem.title}</h3>
                    <span
                      className="ml-4 shrink-0 text-lg text-[var(--muted)] transition-transform duration-300"
                      style={{ transform: openIndex === idx ? "rotate(45deg)" : "none" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-7 text-white/60">{svcItem.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
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
                className={`relative overflow-hidden rounded-3xl border border-white/10 ${
                  index === 0 || index === 3
                    ? "md:col-span-7 min-h-[330px]"
                    : "md:col-span-5 min-h-[260px]"
                } bg-[linear-gradient(135deg,#1f2023_0%,#141416_70%)]`}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                )}
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
                    {t.showcase.projectLabel} {index + 1}
                  </p>
                  <h3 className="headline mt-5 text-2xl sm:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/70 sm:text-base">{project.detail}</p>
                </div>
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
              beforeSrc="/przed.jpg"
              afterSrc="/po.JPG"
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
              href="mailto:loftbau@gmail.com"
            >
              loftbau@gmail.com
            </a>
            <a
              className="rounded-full border border-white/25 px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-[var(--foreground)]"
              href="tel:+48501633917"
            >
              501 633 917
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
            name: "LOFTBAU",
            legalName: "LOFTBAU Paweł Szalecki",
            taxID: "8732958793",
            telephone: "+48501633917",
            email: "loftbau@gmail.com",
            areaServed: "Kraków",
            description: t.structuredDataDescription,
            serviceType: t.structuredDataServices,
            url: isPl ? "https://loftbau-krakow.pl" : "https://loftbau-krakow.pl/en",
          }),
        }}
      />
    </div>
  );
}
