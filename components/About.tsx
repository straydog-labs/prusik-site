"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ABOUT } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="border-t border-mark bg-chalk py-16 max-sm:py-12">
      <Reveal className="mx-auto max-w-page px-7 max-sm:px-5">
        <div className="mb-6">
          <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.1rem)] font-extrabold text-ink">
            {ABOUT.name}
          </h2>
          <p className="mt-2.5 font-mono text-eyebrow font-medium uppercase text-mark">
            {ABOUT.role}
          </p>
        </div>
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-4 max-w-2xl text-copy text-ink last:mb-0">
            {paragraph}
          </p>
        ))}
        <p className="mt-5 text-base text-muted">{ABOUT.location}</p>

        <div className="mt-10">
          <h3 className="mb-4 font-mono text-eyebrow font-medium uppercase text-mark">
            {ABOUT.credentialsLabel}
          </h3>
          <div className="flex flex-wrap gap-2">
            {ABOUT.credentials.map((credential) => (
              <div
                key={credential}
                className="rounded-full border border-line bg-surface-2 px-3.5 py-2 font-mono text-eyebrow font-medium uppercase text-ink"
              >
                {credential}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-2xl rounded-panel border border-line bg-surface p-7">
          <p className="mb-4 text-[0.98rem] leading-relaxed text-muted">
            {ABOUT.book.text}
          </p>
          <motion.a
            href={ABOUT.book.href}
            whileHover={reduce ? undefined : { y: -1 }}
            transition={reduce ? { duration: 0 } : { duration: 0.18 }}
            className="inline-flex items-center rounded-md bg-mark px-6 py-3 font-body text-[0.96rem] font-semibold text-chalk no-underline hover:bg-sandstone"
          >
            {ABOUT.book.cta}
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
