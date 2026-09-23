"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mx-auto flex w-full max-w-xl items-center gap-3 rounded-2xl border border-charcoal-900/10 bg-white px-5 py-4 shadow-card transition focus-within:border-lemon-400 focus-within:shadow-card-hover">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5 shrink-0 text-charcoal-800/40"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className="w-full bg-transparent text-base text-charcoal-900 placeholder:text-charcoal-800/40 focus:outline-none"
      />
      {value && (
        <button
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="shrink-0 text-charcoal-800/40 hover:text-charcoal-900"
        >
          ✕
        </button>
      )}
    </div>
  );
}
