"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const showcase = [
  {
    title: "Apartament Stare Miasto",
    detail: "Luksusowa łazienka SPA z kamieniem i strefą wellness.",
  },
  {
    title: "Willa Wola Justowska",
    detail: "Mikrocement, wielkoformatowe płyty i architektoniczne światło.",
  },
  {
    title: "Penthouse Grzegórzki",
    detail: "Monolityczne linie, ciepły minimalizm i detale premium.",
  },
];

const processSteps = [
  "Konsultacja premium i analiza potrzeb inwestora",
  "Koncepcja materiałowa oraz moodboard wnętrza",
  "Precyzyjna realizacja przez zespół LOFTBAU",
  "Odbiór detaliczny i finalny efekt butikowy",
];

const materials = ["Mikrocement", "Kamień naturalny", "Płytki wielkoformatowe", "Beton architektoniczny"];

const trustStats = [
  { value: "120+", label: "realizacji premium" },
  { value: "9.8/10", label: "średnia ocena klientów" },
  { value: "48h", label: "na ofertę koncepcyjną" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.25 },
};

export default function Home() {
  const [compare, setCompare] = useState(52);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(213,203,181,0.16),transparent_38%),radial-gradient(circle_at_12%_42%,rgba(255,255,255,0.08),transparent_32%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#121212]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <span className="font-display text-sm tracking-[0.28em] text-[#f0e9dc]">LOFTBAU</span>
          <a
            href="#kontakt"
            className="text-xs uppercase tracking-[0.2em] text-[#d8cebb] transition hover:text-white"
          >
            Konsultacja
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-8 px-6 py-24 md:px-10">
          <motion.p {...fadeUp} className="text-xs uppercase tracking-[0.28em] text-[#d8cebb]">
            Kraków • Luxury Interior Studio
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="font-display max-w-4xl text-4xl leading-[1.05] text-[#f6f2ea] sm:text-5xl md:text-7xl"
          >
            Luksusowe łazienki i wykończenia wnętrz dla najbardziej wymagających inwestorów.
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.22 }}
            className="max-w-2xl text-base leading-relaxed text-[#c5bcab] md:text-lg"
          >
            Projektujemy i realizujemy przestrzenie premium: mikrocement, wielki format, kamień oraz
            detale o architektonicznej precyzji.
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-full border border-[#d8cebb]/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#f1eadf] transition hover:bg-[#e9dfcb] hover:text-[#111]"
            >
              Umów konsultację premium
            </a>
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl">
            Premium Showcase
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {showcase.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                viewport={{ once: true, amount: 0.4 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="h-40 rounded-2xl bg-gradient-to-br from-[#282828] via-[#1d1d1d] to-[#101010]" />
                <h3 className="mt-6 font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#bfb6a7]">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl">
            Before / After
          </motion.h2>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="relative mt-8 overflow-hidden rounded-3xl border border-white/10"
          >
            <div className="h-72 bg-[#1f1f1f] md:h-[26rem]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3f3b35] to-[#171717]" />
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#cbbfa9]/60 to-[#7f7667]/20"
              style={{ width: `${compare}%` }}
            />
            <div
              className="absolute inset-y-0 w-px bg-[#f5ede0]"
              style={{ left: `calc(${compare}% - 0.5px)` }}
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-black/50 px-3 py-1 text-xs tracking-[0.16em]">
              PRZED
            </div>
            <div className="absolute bottom-5 right-5 rounded-full bg-[#e8ddc8]/90 px-3 py-1 text-xs tracking-[0.16em] text-[#191919]">
              PO
            </div>
          </motion.div>
          <label className="mt-5 block text-xs uppercase tracking-[0.18em] text-[#bfb4a1]">
            Interaktywny suwak transformacji
            <input
              type="range"
              min={0}
              max={100}
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
              className="mt-3 w-full accent-[#d7cbb5]"
            />
          </label>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl">
            Proces współpracy
          </motion.h2>
          <ol className="mt-10 space-y-5 border-l border-white/15 pl-6">
            {processSteps.map((step, index) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-sm text-[#d1c7b6] md:text-base"
              >
                <span className="mr-2 font-display text-[#f0e7d8]">0{index + 1}.</span>
                {step}
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl">
            Materiały premium
          </motion.h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {materials.map((material) => (
              <motion.div
                key={material}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm tracking-[0.13em] text-[#d6ccba]"
              >
                {material}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl">
            Zaufanie klientów premium
          </motion.h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 p-6">
                <p className="font-display text-4xl text-[#efe6d6]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#bdb3a2]">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#c6bcab]">
            „LOFTBAU zrealizował nasz projekt jak butikowe studio architektoniczne — z najwyższą kulturą
            detalu i perfekcyjnym wykończeniem.”
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl">
            Premium renowacje Kraków
          </motion.h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#c8bead] md:text-base">
            Obsługujemy inwestycje w dzielnicach premium Krakowa: Stare Miasto, Wola Justowska,
            Grzegórzki i Dębniki. Realizujemy luksusowe łazienki, premium bathroom renovation,
            mikrocement i płytki wielkoformatowe oraz kompleksowe luxury interior finishing w Krakowie.
          </p>
        </section>

        <section id="kontakt" className="mx-auto max-w-6xl px-6 pb-28 pt-16 md:px-10">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-[#e4d8c3]/35 bg-gradient-to-br from-[#201f1c] to-[#121212] p-8 md:p-12"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#d7cab4]">Kontakt</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Stwórzmy wnętrze o charakterze premium.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#cbc0ad] md:text-base">
              Umów prywatną konsultację i poznaj proces realizacji luksusowej łazienki lub wykończenia
              apartamentu w Krakowie.
            </p>
            <a
              href="mailto:kontakt@loftbau.pl"
              className="mt-8 inline-flex rounded-full bg-[#e6dcc8] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#161616] transition hover:bg-[#f4ecdd]"
            >
              kontakt@loftbau.pl
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
