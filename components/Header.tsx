"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/categories";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-900/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lemon-gradient text-sm font-bold text-charcoal-900">
            F
          </span>
          <span className="text-lg font-semibold tracking-tight text-charcoal-900">
            Findly
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-charcoal-800/80 md:flex">
          <Link href="/" className="hover:text-charcoal-900">
            Home
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-charcoal-900">
              Categories
            </button>
            <div className="invisible absolute left-0 top-full z-10 w-48 translate-y-1 rounded-xl border border-charcoal-900/5 bg-white p-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
              {categories.map((c) => (
                <Link
                  key={c.name}
                  href={`/?category=${encodeURIComponent(c.name)}#products`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-charcoal-800 hover:bg-lemon-50"
                >
                  <span>{c.emoji}</span>
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#products" className="hover:text-charcoal-900">
            Products
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-charcoal-900/10 text-charcoal-800 transition hover:border-lemon-400 hover:text-lemon-700 sm:flex"
          >
            <SearchIcon />
          </button>
          <button
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-900/10 text-charcoal-800 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-charcoal-900/5 bg-white px-5 py-3 md:hidden">
          <nav className="flex flex-col gap-1 text-sm text-charcoal-800">
            <Link href="/" className="rounded-lg px-2 py-2 hover:bg-lemon-50">
              Home
            </Link>
            <Link
              href="/#products"
              className="rounded-lg px-2 py-2 hover:bg-lemon-50"
            >
              Products
            </Link>
            <span className="mt-1 px-2 text-xs uppercase tracking-wide text-charcoal-800/50">
              Categories
            </span>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((c) => (
                <Link
                  key={c.name}
                  href={`/?category=${encodeURIComponent(c.name)}#products`}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-lemon-50"
                >
                  <span>{c.emoji}</span>
                  {c.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
