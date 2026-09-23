"use client";

import { categories } from "@/data/categories";

interface CategoryListProps {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryList({ selected, onSelect }: CategoryListProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        <button
          onClick={() => onSelect(null)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
            selected === null
              ? "bg-lemon-gradient text-charcoal-900 shadow-card"
              : "border border-charcoal-900/10 text-charcoal-800/70 hover:border-lemon-400 hover:text-charcoal-900"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => onSelect(c.name === selected ? null : c.name)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              selected === c.name
                ? "bg-lemon-gradient text-charcoal-900 shadow-card"
                : "border border-charcoal-900/10 text-charcoal-800/70 hover:border-lemon-400 hover:text-charcoal-900"
            }`}
          >
            <span className="mr-1.5">{c.emoji}</span>
            {c.name}
          </button>
        ))}
      </div>
    </section>
  );
}
