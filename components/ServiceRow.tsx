"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Service } from "@/lib/content";
import Reveal from "@/components/Reveal";

type Props = {
  service: Service;
  highlighted: boolean;
  register: (id: string, node: HTMLElement | null) => void;
};

export default function ServiceRow({ service, highlighted, register }: Props) {
  const reduce = useReducedMotion();

  return (
    <Reveal
      as="article"
      id={service.id}
      register={(node) => register(service.id, node)}
      className={`grid grid-cols-1 items-start gap-6 border-b border-line py-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-12 ${
        highlighted ? "shadow-[0_0_0_1px_#C08A52]" : ""
      }`}
    >
      <div>
        <h3 className="font-display text-[1.5rem] font-bold tracking-[-0.01em] text-ink">
          {service.title}
        </h3>
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-2 max-w-xl text-copy text-muted">
            {paragraph}
          </p>
        ))}
        <ul className="mt-5 flex list-none flex-col gap-3.5 p-0">
          {service.points.map((point) => (
            <li key={point.label} className="text-[1.02rem] leading-snug text-ink">
              <span className="mb-1 block font-mono text-eyebrow font-medium uppercase text-mark">
                {point.label}
              </span>
              {point.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="w-full rounded-panel border border-line bg-surface-2 p-5">
          {service.pricing.kind === "grid" ? (
            <div className="grid grid-cols-2 gap-x-7 gap-y-4">
              {service.pricing.cells.map((cell) => (
                <div key={`${cell.amount}-${cell.cap}`}>
                  <div className="font-display text-[clamp(1.7rem,2.4vw,2.15rem)] font-extrabold leading-none tracking-[-0.02em] text-mark tabular-nums">
                    {cell.amount}
                  </div>
                  <div className="mt-2 font-mono text-eyebrow font-medium uppercase text-muted">
                    {cell.cap}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {service.pricing.kind === "single" ? (
            <>
              <div className="font-display text-[clamp(1.7rem,2.4vw,2.15rem)] font-extrabold leading-none tracking-[-0.02em] text-mark tabular-nums">
                {service.pricing.amount}
              </div>
              <div className="mt-2 font-mono text-eyebrow font-medium uppercase text-muted">
                {service.pricing.cap}
              </div>
              {service.pricing.note ? (
                <p className="mt-3 font-body text-[0.92rem] leading-relaxed text-muted">
                  {service.pricing.note}
                </p>
              ) : null}
            </>
          ) : null}

          {service.pricing.kind === "contact" ? (
            <div className="font-display text-[clamp(1.35rem,2vw,1.65rem)] font-extrabold leading-tight tracking-[-0.015em] text-mark">
              {service.pricing.amount}
            </div>
          ) : null}
        </div>

        <motion.a
          href={service.cta.href}
          whileHover={reduce ? undefined : { y: -1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.18 }}
          className="font-body font-semibold text-mark no-underline hover:text-sandstone hover:underline motion-reduce:transition-none"
        >
          {service.cta.label}
        </motion.a>
      </div>
    </Reveal>
  );
}
