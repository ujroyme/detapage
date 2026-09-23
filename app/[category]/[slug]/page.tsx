import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

// Pre-render a route for every known product at /<categorySlug>/<slug> so
// each has a stable URL from day one. When a real page is later built for
// a given product (e.g. app/books/pride-and-prejudice/page.tsx), Next.js
// will use that static route instead of this placeholder automatically.
export function generateStaticParams() {
  return products.map((p) => ({ category: p.categorySlug, slug: p.slug }));
}

export default function ProductPlaceholderPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const product = products.find(
    (p) => p.categorySlug === params.category && p.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Header />
      <section className="bg-lemon-gradient-soft">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-charcoal-800/70 shadow-card">
            {product.category}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-md text-charcoal-800/70">
            This product page is being prepared.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-lemon-gradient px-5 py-2.5 text-sm font-medium text-charcoal-900 shadow-card transition hover:brightness-105"
          >
            ← Back to all products
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
