import SearchBar from "@/components/SearchBar";

interface HeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export default function Hero({ searchValue, onSearchChange }: HeroProps) {
  return (
    <section className="bg-lemon-gradient-soft">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <h1 className="text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-5xl">
          Discover Products & Their Details
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-800/70 sm:text-lg">
          Explore information, specifications, features and more across
          products from different categories.
        </p>
        <div className="mt-8">
          <SearchBar value={searchValue} onChange={onSearchChange} />
        </div>
      </div>
    </section>
  );
}
