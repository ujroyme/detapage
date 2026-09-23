import Link from "next/link";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-900/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lemon-gradient text-xs font-bold text-charcoal-900">
              F
            </span>
            <span className="font-semibold text-charcoal-900">Findly</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-charcoal-800/60">
            A simple, focused directory for discovering products and their
            details across categories.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-charcoal-900">Categories</h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-charcoal-800/60">
            {categories.map((c) => (
              <li key={c.name}>
                <Link
                  href={`/?category=${encodeURIComponent(c.name)}#products`}
                  className="hover:text-charcoal-900"
                >
                  {c.emoji} {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-charcoal-900">About</h4>
          <ul className="mt-3 space-y-2 text-sm text-charcoal-800/60">
            <li>
              <Link href="/" className="hover:text-charcoal-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#products" className="hover:text-charcoal-900">
                Popular Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal-900/5 px-5 py-5 text-center text-xs text-charcoal-800/40 sm:px-8">
        © {new Date().getFullYear()} Findly. Sample data for demonstration purposes.
      </div>
    </footer>
  );
}
