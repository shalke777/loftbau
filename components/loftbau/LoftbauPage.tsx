"use client";

import { motion } from "framer-motion";
import BeforeAfter from "./BeforeAfter";

const services = [
  "Luxury bathrooms",
  "Large-format tile installation",
  "Microcement surfaces",
  "Architectural interior finishing",
];

const showcase = [
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
];

const process = [
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
    detail: "Quality walk-through, finishing calibration, and handover ritual.",
  },
];

const materials = ["Concrete", "Natural Stone", "Microcement", "Large-Format Tiles"];

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const trustStats = [
  { value: "120+", label: "premium renovations delivered" },
  { value: "98%", label: "clients from recommendation" },
  { value: "12", label: "years of high-end execution" },
];

const testimonials = [
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
];

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

export default function LoftbauPage() {
  return (
    <div className="noise min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="headline text-sm tracking-[0.3em] text-[var(--foreground)]" href="#hero">
            LOFTBAU
          </a>
          <div className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-white/70 md:flex">
            <a href="#showcase">Projekty</a>
            <a href="#process">Proces</a>
            <a href="#materials">Materialy</a>
            <a href="#contact">Kontakt</a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--foreground)] transition hover:border-white/45"
          >
            Konsultacja
          </a>
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
              Luxury Interior Execution in Krakow
            </motion.p>
            <motion.h1
              variants={item}
              className="headline text-4xl leading-[1.02] sm:text-6xl md:text-7xl"
            >
              Cinematic Bathrooms. Architectural Finishing. Premium Craft by LOFTBAU Krakow.
            </motion.h1>
            <motion.p variants={item} className="max-w-2xl text-sm leading-7 text-white/75 sm:text-lg">
              We design and deliver high-end bathrooms and interior surfaces for clients who expect precise detail,
              elevated materials, and timeless spatial atmosphere.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-white/70">
              {services.map((service) => (
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
                Book Premium Consultation
              </a>
              <a
                href="#showcase"
                className="rounded-full border border-white/20 px-7 py-3 text-center text-xs uppercase tracking-[0.2em] text-[var(--foreground)]"
              >
                Explore Portfolio
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
              eyebrow="Premium Showcase"
              title="Selected spaces for clients who invest in design quality, not compromise."
              body="Each project combines architectural discipline, tactile materials, and installation precision.
              The result is calm, luxurious interior performance."
            />
          </motion.div>
          <motion.div variants={item} className="grid gap-6 md:grid-cols-12">
            {showcase.map((project, index) => (
              <article
                key={project.title}
                className={`rounded-3xl border border-white/10 p-6 ${
                  index === 0 ? "md:col-span-7 min-h-[330px]" : "md:col-span-5 min-h-[250px]"
                } bg-[linear-gradient(135deg,#1f2023_0%,#141416_70%)]`}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">Project {index + 1}</p>
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
              eyebrow="Before / After"
              title="Measured transformation with restrained, elegant contrast."
              body="A controlled comparison of spatial quality before and after our premium renovation approach."
            />
          </motion.div>
          <motion.div variants={item}>
            <BeforeAfter
              beforeLabel="Fragmented layout, visual noise, and low material consistency."
              afterLabel="Monolithic geometry, tactile harmony, and hotel-grade detailing."
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
              eyebrow="Client Journey"
              title="A studio-level process from first brief to final reveal."
              body="Transparent milestones, disciplined execution, and direct communication throughout the project."
            />
          </motion.div>
          <motion.div variants={item} className="grid gap-5 md:grid-cols-2">
            {process.map((phase) => (
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
              eyebrow="Materials"
              title="Curated surfaces for architectural depth and long-term performance."
              body="We work with premium concrete effects, stone textures, mineral microcement, and large-format tile systems."
            />
          </motion.div>
          <motion.div variants={item} className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {materials.map((material) => (
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
              eyebrow="Trust"
              title="Premium positioning built on precision, consistency, and referrals."
              body="LOFTBAU serves apartment owners, investors, and architects in Krakow's top districts."
            />
          </motion.div>
          <motion.div variants={item} className="grid gap-4 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="headline text-4xl text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/65">{stat.label}</p>
              </article>
            ))}
          </motion.div>
          <motion.div variants={item} className="grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
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
              eyebrow="Local SEO"
              title="Krakow authority for luxury renovation and premium bathroom execution."
              body="We focus on luxury bathrooms Krakow, premium bathroom renovation Krakow, microcement Krakow,
              large-format tiles Krakow, and luxury interior finishing Krakow."
            />
            <p className="max-w-4xl text-sm leading-7 text-white/70 sm:text-base">
              District focus: Stare Miasto, Wola Justowska, Debniki, Zablocie, and modern investment apartments across Krakow.
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
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)]">Contact</p>
          <h2 className="headline mt-5 max-w-4xl text-3xl leading-tight sm:text-5xl">
            Start your premium renovation journey with a private LOFTBAU consultation.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Share your apartment, timeline, and expected finish level. We will return with a curated execution path tailored to your space.
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
            description:
              "Luxury bathrooms, microcement, large-format tiles, and premium interior finishing in Krakow.",
            serviceType: [
              "Luxury bathroom renovation",
              "Microcement finishing",
              "Large-format tile installation",
              "Premium interior finishing",
            ],
          }),
        }}
      />
    </div>
  );
}
