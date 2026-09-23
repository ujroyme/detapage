import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.pageUrl}
      className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-900/5 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-lemon-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-charcoal-800 shadow-sm backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-base font-semibold text-charcoal-900">
          {product.name}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-charcoal-800/70">
          {product.description}
        </p>

        <div className="mt-1 flex items-center justify-between">
          {product.price ? (
            <span className="text-sm font-semibold text-charcoal-900">
              {product.price}
            </span>
          ) : (
            <span className="text-sm text-charcoal-800/40">Price unavailable</span>
          )}
          {product.rating && (
            <span className="flex items-center gap-1 text-sm text-charcoal-800/70">
              <span className="text-lemon-600">★</span>
              {product.rating.toFixed(1)}
            </span>
          )}
        </div>

        <span className="mt-3 inline-flex items-center justify-center rounded-xl bg-lemon-gradient px-4 py-2 text-sm font-medium text-charcoal-900 transition group-hover:brightness-105">
          View Details
        </span>
      </div>
    </Link>
  );
}
