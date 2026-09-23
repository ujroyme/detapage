"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/data/products";
import Hero from "@/components/Hero";
import CategoryList from "@/components/CategoryList";
import ProductGrid from "@/components/ProductGrid";

export default function HomeClient({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(initialCategory);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category ? p.category === category : true;
      const matchesSearch = q
        ? p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  return (
    <>
      <Hero searchValue={search} onSearchChange={setSearch} />
      <CategoryList selected={category} onSelect={setCategory} />

      <section id="products" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-charcoal-900">
            Popular Products
          </h2>
          <span className="text-sm text-charcoal-800/50">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
          </span>
        </div>
        <ProductGrid products={filtered} />
      </section>
    </>
  );
}
