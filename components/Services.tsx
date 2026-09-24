"use client";

import { useCallback, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { FINDER, SERVICES } from "@/lib/content";
import ServiceFinder from "@/components/ServiceFinder";
import ServiceRow from "@/components/ServiceRow";

export default function Services() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const nodes = useRef<Record<string, HTMLElement | null>>({});
  const timer = useRef<number | null>(null);

  const register = useCallback((id: string, node: HTMLElement | null) => {
    nodes.current[id] = node;
  }, []);

  const onSelect = useCallback(
    (id: string) => {
      setActiveId(id);
      setNote(FINDER.notes[id] ?? "");
      const target = nodes.current[id];
      target?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "center",
      });
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setActiveId((current) => (current === id ? null : current));
      }, 2400);
    },
    [reduce]
  );

  return (
    <section id="services" className="bg-surface py-16 max-sm:py-12">
      <div className="mx-auto max-w-page px-7 max-sm:px-5">
        <div className="mb-7">
          <h2 className="font-display text-[clamp(2.05rem,4vw,2.85rem)] font-extrabold text-ink">
            Services
          </h2>
        </div>
        <ServiceFinder activeId={activeId} note={note} onSelect={onSelect} />
        <div className="border-t border-line">
          {SERVICES.map((service) => (
            <ServiceRow
              key={service.id}
              service={service}
              highlighted={activeId === service.id}
              register={register}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
