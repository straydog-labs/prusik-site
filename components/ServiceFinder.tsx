"use client";

import { FINDER } from "@/lib/content";

type Props = {
  activeId: string | null;
  note: string;
  onSelect: (id: string) => void;
};

export default function ServiceFinder({ activeId, note, onSelect }: Props) {
  return (
    <div className="mb-8" role="group" aria-label="Find your service">
      <p className="mb-3 text-chip font-semibold text-ink">
        {FINDER.prompt}
      </p>
      <div className="flex flex-wrap gap-2">
        {FINDER.options.map((option) => {
          const selected = activeId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`rounded-full border px-4 py-2.5 text-left text-chip font-medium transition-colors duration-150 motion-reduce:transition-none ${
                selected
                  ? "border-sandstone bg-surface-2 text-sandstone"
                  : "border-line bg-surface text-ink hover:border-sandstone hover:text-sandstone"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {note ? (
        <p className="mt-3 max-w-[42ch] text-chip italic text-muted">{note}</p>
      ) : null}
    </div>
  );
}
