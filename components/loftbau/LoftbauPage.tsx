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
      materials: "Materialy",
      contact: "Kontakt",
      consultation: "Konsultacja",
    },
    language: {
      pl: "PL",
      en: "ENG",
    },
    hero: {
      eyebrow: "Premium wykonczen wnętrz w Krakowie",
      title: "Cinematic łazienki. Architektoniczne wykonczenie. Premium craft od LOFTBAU Krakow.",
      body: "Projektujemy i realizujemy luksusowe lazienki oraz powierzchnie premium dla klientow oczekujacych precyzji detalu, klasy materialow i ponadczasowej atmosfery.",
      ctaPrimary: "Umow konsultacje premium",
      ctaSecondary: "Zobacz portfolio",
      services: [
        "Luksusowe lazienki",
        "Wielkoformatowy montaz plytek",
        "Powierzchnie z mikrocementu",
        "Architektoniczne wykonczenia wnętrz",
      ],
    },
    showcase: {
      eyebrow: "Premium Showcase",
      title: "Wybrane realizacje dla klientow, ktorzy inwestuja w jakosc designu, nie kompromis.",
      body: "Kazdy projekt laczy dyscypline architektoniczna, material premium i precyzyjna instalacje. Efektem jest spokojna, luksusowa jakosc przestrzeni.",
      projectLabel: "Projekt",
      items: [
        {
          title: "Lazienka Penthouse",
          detail: "Wloska symetria slabow, ukryte odwodnienia liniowe i oswietlenie klasy gallery.",
        },
        {
          title: "Signature Microcement",
          detail: "Bezszwowa powierzchnia mineralna o matowej glebi i perfekcyjnych przejsciach naroznych.",
        },
        {
          title: "Architektoniczne SPA",
          detail: "Ciepla paleta kamienia, duze formaty i kompozycje umywalkowe na wymiar.",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Przed / Po",
      title: "Mierzalna transformacja z eleganckim, kontrolowanym kontrastem.",
      body: "Porownanie jakosci przestrzeni przed i po wdrozeniu naszego premium procesu remontowego.",
      beforeLabel: "Rozproszony uklad, wizualny chaos i niska spojnosc materialow.",
      afterLabel: "Monolityczna geometria, dotykowa harmonia i hotelowa jakosc detalu.",
      beforeBadge: "Przed",
      afterBadge: "Po",
      ariaLabel: "Porownanie przed i po",
    },
    process: {
      eyebrow: "Sciezka Klienta",
      title: "Proces klasy studio od pierwszego briefu do finalnego odbioru.",
      body: "Transparentne etapy, zdyscyplinowana realizacja i bezposrednia komunikacja przez caly projekt.",
      items: [
        {
          step: "01",
          title: "Brief Przestrzeni",
          detail: "Cele projektowe, materialy, logika swiatla i precyzja budzetu.",
        },
        {
          step: "02",
          title: "Doprecyzowanie Techniczne",
          detail: "Pomiary, pakiet detali i architektura harmonogramu.",
        },
        {
          step: "03",
          title: "Realizacja Premium",
          detail: "Dostarczenie wykonawcze z nadzorem w standardzie architektonicznym.",
        },
        {
          step: "04",
          title: "Finalna Kuracja",
          detail: "Kontrola jakosci, kalibracja wykonczenia i rytual przekazania.",
        },
      ],
    },
    materials: {
      eyebrow: "Materialy",
      title: "Selekcjonowane powierzchnie dla architektonicznej glebi i trwalosci.",
      body: "Pracujemy z premium betonem dekoracyjnym, kamieniem, mikrocementem i systemami plytek wielkoformatowych.",
      items: ["Beton", "Kamien naturalny", "Mikrocement", "Plytki wielkoformatowe"],
    },
    trust: {
      eyebrow: "Zaufanie",
      title: "Pozycja premium zbudowana na precyzji, powtarzalnosci i rekomendacjach.",
      body: "LOFTBAU realizuje projekty dla wlascicieli apartamentow, inwestorow i architektow w topowych dzielnicach Krakowa.",
      stats: [
        { value: "120+", label: "zrealizowanych remontow premium" },
        { value: "98%", label: "klientow z polecenia" },
        { value: "12", label: "lat doswiadczenia high-end" },
      ],
      testimonials: [
        {
          quote:
            "LOFTBAU zmienilo nasze mieszkanie w spokojna, architektoniczna przestrzen. Jakosc wykonania porownywalna z elitarnymi studiami europejskimi.",
          author: "Inwestor prywatny, Stare Miasto",
        },
        {
          quote:
            "Od detalu po finalne wykonczenie kazda decyzja byla przemyslana. Lazienka daje teraz odczucie butikowego hotelu.",
          author: "Wlascicielka domu, Wola Justowska",
        },
      ],
    },
    seo: {
      eyebrow: "Local SEO",
      title: "Krakowska marka premium od luksusowych remontow i lazienek high-end.",
      body: "Skupiamy sie na: luxury bathrooms Krakow, premium bathroom renovation Krakow, microcement Krakow, large-format tiles Krakow i luxury interior finishing Krakow.",
      districts:
        "Obszar realizacji: Stare Miasto, Wola Justowska, Debniki, Zablocie oraz nowoczesne inwestycje apartamentowe w Krakowie.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Rozpocznij swoj premium remont od prywatnej konsultacji LOFTBAU.",
      body: "Opisz mieszkanie, harmonogram i oczekiwany poziom wykonczenia. Wrocimy z kuratorem realizacji dopasowanym do Twojej przestrzeni.",
    },
    structuredDataDescription:
      "Luksusowe lazienki, mikrocement, plytki wielkoformatowe i premium wykonczenia wnętrz w Krakowie.",
    structuredDataServices: [
      "Luksusowe wykonczenie lazienek",
      "Wykonczenie mikrocementem",
      "Montaż plytek wielkoformatowych",
      "Premium wykonczenie wnętrz",
    ],
  },
  en: {
    nav: {
      projects: "Projects",
      process: "Process",
      materials: "Materials",
      contact: "Contact",
      consultation: "Consultation",
    },
    language: {
      pl: "PL",
      en: "ENG",
    },
    hero: {
      eyebrow: "Luxury interior execution in Krakow",
      title: "Cinematic Bathrooms. Architectural Finishing. Premium Craft by LOFTBAU Krakow.",
      body: "We design and deliver luxury bathrooms and high-end surfaces for clients who expect detail precision, elevated materials, and timeless atmosphere.",
      ctaPrimary: "Book premium consultation",
      ctaSecondary: "Explore portfolio",
      services: [
        "Luxury bathrooms",
        "Large-format tile installation",
        "Microcement surfaces",
        "Architectural interior finishing",
      ],
    },
    showcase: {
      eyebrow: "Premium Showcase",
      title: "Selected spaces for clients who invest in design quality, not compromise.",
      body: "Each project combines architectural discipline, tactile materials, and precision installation. The result is calm, luxurious interior performance.",
      projectLabel: "Project",
      items: [
        {
          title: "Penthouse Bathroom",
          detail: "Italian slab symmetry, hidden linear drains, and gallery-grade lighting.",
        },
        {
          title: "Signature Microcement",
          detail: "Seamless mineral skin with tactile matte depth and precise corner transitions.",
        },
        {
          title: "Architectural Spa",
          detail: "Warm stone palette, oversized formats, and bespoke vanity compositions.",
        },
      ],
    },
    beforeAfter: {
      eyebrow: "Before / After",
      title: "Measured transformation with restrained, elegant contrast.",
      body: "A controlled comparison of spatial quality before and after our premium renovation approach.",
      beforeLabel: "Fragmented layout, visual noise, and low material consistency.",
      afterLabel: "Monolithic geometry, tactile harmony, and hotel-grade detailing.",
      beforeBadge: "Before",
      afterBadge: "After",
      ariaLabel: "Before and after comparison",
    },
    process: {
      eyebrow: "Client Journey",
      title: "A studio-level process from first brief to final reveal.",
      body: "Transparent milestones, disciplined execution, and direct communication throughout the project.",
      items: [
        {
          step: "01",
          title: "Spatial Brief",
          detail: "Design goals, materials, light logic, and budget precision.",
        },
        {
          step: "02",
          title: "Technical Alignment",
          detail: "Measurement pass, detailing package, and timeline architecture.",
        },
        {
          step: "03",
          title: "Premium Execution",
          detail: "Meticulous site delivery with architectural supervision standards.",
        },
        {
          step: "04",
          title: "Final Curation",
          detail: "Quality walkthrough, finishing calibration, and handover ritual.",
        },
      ],
    },
    materials: {
      eyebrow: "Materials",
      title: "Curated surfaces for architectural depth and long-term performance.",
      body: "We work with premium concrete effects, stone textures, microcement, and large-format tile systems.",
      items: ["Concrete", "Natural Stone", "Microcement", "Large-Format Tiles"],
    },
    trust: {
      eyebrow: "Trust",
      title: "Premium positioning built on precision, consistency, and referrals.",
      body: "LOFTBAU serves apartment owners, investors, and architects in Krakow's top districts.",
      stats: [
        { value: "120+", label: "premium renovations delivered" },
        { value: "98%", label: "clients from recommendation" },
        { value: "12", label: "years of high-end execution" },
      ],
      testimonials: [
        {
          quote:
            "LOFTBAU transformed our apartment into a calm, architectural space. Execution quality felt on par with elite European studios.",
          author: "Private Investor, Krakow Old Town",
        },
        {
          quote:
            "From detailing to finish, every decision was intentional. The bathroom now feels like a boutique hotel suite.",
          author: "Homeowner, Wola Justowska",
        },
      ],
    },
    seo: {
      eyebrow: "Local SEO",
      title: "Krakow authority for luxury renovation and premium bathroom execution.",
      body: "We focus on luxury bathrooms Krakow, premium bathroom renovation Krakow, microcement Krakow, large-format tiles Krakow, and luxury interior finishing Krakow.",
      districts:
        "District focus: Stare Miasto, Wola Justowska, Debniki, Zablocie, and modern investment apartments across Krakow.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start your premium renovation journey with a private LOFTBAU consultation.",
      body: "Share your apartment, timeline, and expected finish level. We will return with a curated execution path tailored to your space.",
    },
    structuredDataDescription:
      "Luxury bathrooms, microcement, large-format tiles, and premium interior finishing in Krakow.",
    structuredDataServices: [
      "Luxury bathroom renovation",
      "Microcement finishing",
      "Large-format tile installation",
      "Premium interior finishing",
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
          id="showcase"
          className="mt-20 space-y-12"
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
