"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type BeforeAfterProps = {
  beforeLabel: string;
  afterLabel: string;
  beforeBadge: string;
  afterBadge: string;
  ariaLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
};

export default function BeforeAfter({
  beforeLabel,
  afterLabel,
  beforeBadge,
  afterBadge,
  ariaLabel,
  beforeSrc,
  afterSrc,
}: BeforeAfterProps) {
  const [slider, setSlider] = useState(56);

  const clipPath = useMemo(
    () => `polygon(0 0, ${slider}% 0, ${slider}% 100%, 0 100%)`,
    [slider],
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-3 sm:p-4">
      <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[460px]">
        {/* Tło "przed" */}
        {beforeSrc ? (
          <Image src={beforeSrc} alt={beforeBadge} fill className="object-cover" sizes="100vw" />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(130deg,#4f4a43_0%,#2c2d30_50%,#18181a_100%)]" />
        )}
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80">
          {beforeBadge}
        </div>
        <div className="absolute bottom-5 left-4 max-w-[16rem] text-sm text-white/70 sm:text-base">
          {beforeLabel}
        </div>

        <motion.div
          className="absolute inset-0"
          style={{ clipPath }}
          transition={{ type: "spring", stiffness: 180, damping: 24 }}
        >
          {/* Tło "po" */}
          {afterSrc ? (
            <Image src={afterSrc} alt={afterBadge} fill className="object-cover" sizes="100vw" />
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(145deg,#d8cbb8_0%,#9f8f79_35%,#4e463f_100%)]" />
          )}
          <div className="absolute right-4 top-4 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-black/75">
            {afterBadge}
          </div>
          <div className="absolute bottom-5 right-4 max-w-[16rem] text-right text-sm text-black/70 sm:text-base">
            {afterLabel}
          </div>
        </motion.div>

        <div
          className="pointer-events-none absolute top-0 h-full w-px bg-white/80"
          style={{ left: `${slider}%` }}
        >
          <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-black/40" />
        </div>
      </div>

      <div className="mt-4 px-1">
        <input
          className="h-2 w-full cursor-col-resize appearance-none rounded-full bg-white/10"
          type="range"
          min={8}
          max={92}
          value={slider}
          onChange={(event) => setSlider(Number(event.target.value))}
          aria-label={ariaLabel}
        />
      </div>
    </div>
  );
}
