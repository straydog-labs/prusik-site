"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "article";
  register?: (node: HTMLElement | null) => void;
};

export default function Reveal({
  children,
  className = "",
  id,
  as = "div",
  register,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    register?.(node);
    if (reduce) return;

    const belowFold = node.getBoundingClientRect().top > window.innerHeight * 0.9;
    if (!belowFold) return;

    node.classList.add("reveal-wait");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("reveal-in");
          io.disconnect();
        }
      },
      { threshold: 0.28 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [reduce, register]);

  const Tag = as;
  return (
    <Tag
      id={id}
      ref={(node) => {
        ref.current = node;
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
