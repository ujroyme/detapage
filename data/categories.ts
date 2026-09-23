// Category list for the product directory.
// Add a new category by adding one entry here — CategoryList and the
// homepage filter both read from this file automatically.
//
// `slug` is the URL-safe version used in product URLs, e.g.
// category "Books" (slug "books") → /books/pride-and-prejudice

export interface Category {
  name: string;
  slug: string;
  emoji: string;
}

export const categories: Category[] = [
  { name: "Mobile", slug: "mobile", emoji: "📱" },
  { name: "TV", slug: "tv", emoji: "📺" },
  { name: "Cars", slug: "cars", emoji: "🚗" },
  { name: "Bikes", slug: "bikes", emoji: "🏍️" },
  { name: "Laptops", slug: "laptops", emoji: "💻" },
  { name: "Books", slug: "books", emoji: "📚" },
  { name: "Electronics", slug: "electronics", emoji: "🎧" },
  { name: "Appliances", slug: "appliances", emoji: "🏠" },
];
