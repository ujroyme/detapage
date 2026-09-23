// Product data source.
//
// This is a simple in-memory/JSON-style data file standing in for a
// database. Each product's URL is /<categorySlug>/<slug>, matching its
// category from data/categories.ts (see app/[category]/[slug]/page.tsx).
//
// TO ADD A PRODUCT: append an object below, using an existing category's
// slug from data/categories.ts for `categorySlug`. The homepage card and
// routing pick it up automatically — no other file needs to change.
// TO GIVE A PRODUCT ITS OWN REAL PAGE: create
// app/<categorySlug>/<slug>/page.tsx (a static route). Next.js will use
// that file instead of the [category]/[slug] placeholder for that one
// product.

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  image: string;
  price?: string;
  rating?: number;
  pageUrl: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Samsung Galaxy S25 Ultra",
    slug: "samsung-galaxy-s25-ultra",
    category: "Mobile",
    categorySlug: "mobile",
    description: "Flagship Android phone with a 200MP camera, titanium frame, and built-in S Pen.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
    price: "$1,299",
    rating: 4.8,
    pageUrl: "/mobile/samsung-galaxy-s25-ultra",
  },
  {
    id: "2",
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    category: "Mobile",
    categorySlug: "mobile",
    description: "Apple's latest Pro phone with A19 chip, pro-grade camera system, and titanium design.",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115481?w=600&q=80",
    price: "$1,199",
    rating: 4.9,
    pageUrl: "/mobile/iphone-17-pro",
  },
  {
    id: "3",
    name: "Sony Bravia TV",
    slug: "sony-bravia-tv",
    category: "TV",
    categorySlug: "tv",
    description: "4K OLED smart TV with rich contrast, immersive sound, and Google TV built in.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&q=80",
    price: "$1,899",
    rating: 4.6,
    pageUrl: "/tv/sony-bravia-tv",
  },
  {
    id: "4",
    name: "Toyota Camry",
    slug: "toyota-camry",
    category: "Cars",
    categorySlug: "cars",
    description: "Reliable midsize sedan with a hybrid powertrain option and spacious cabin.",
    image: "https://images.unsplash.com/photo-1621007690695-33cd876e0703?w=600&q=80",
    price: "$28,855",
    rating: 4.5,
    pageUrl: "/cars/toyota-camry",
  },
  {
    id: "5",
    name: "Royal Enfield Classic 350",
    slug: "royal-enfield-classic-350",
    category: "Bikes",
    categorySlug: "bikes",
    description: "Retro-styled cruiser motorcycle known for its thumping single-cylinder engine.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
    price: "$4,200",
    rating: 4.4,
    pageUrl: "/bikes/royal-enfield-classic-350",
  },
  {
    id: "6",
    name: "MacBook Air",
    slug: "macbook-air",
    category: "Laptops",
    categorySlug: "laptops",
    description: "Thin and light laptop powered by Apple's M-series chip with all-day battery life.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    price: "$1,099",
    rating: 4.8,
    pageUrl: "/laptops/macbook-air",
  },
  {
    id: "7",
    name: "The Alchemist",
    slug: "the-alchemist",
    category: "Books",
    categorySlug: "books",
    description: "Paulo Coelho's bestselling novel about a shepherd's journey to find his destiny.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
    price: "$12",
    rating: 4.7,
    pageUrl: "/books/the-alchemist",
  },
  {
    id: "8",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    category: "Electronics",
    categorySlug: "electronics",
    description: "Industry-leading noise-cancelling wireless headphones with 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
    price: "$399",
    rating: 4.7,
    pageUrl: "/electronics/sony-wh-1000xm5",
  },
  {
    id: "9",
    name: "LG Front Load Washing Machine",
    slug: "lg-front-load-washing-machine",
    category: "Appliances",
    categorySlug: "appliances",
    description: "Energy-efficient washing machine with steam cleaning and smart diagnostics.",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80",
    price: "$749",
    rating: 4.3,
    pageUrl: "/appliances/lg-front-load-washing-machine",
  },
  {
    id: "10",
    name: "Pride and Prejudice",
    slug: "pride-and-prejudice",
    category: "Books",
    categorySlug: "books",
    description: "Jane Austen's classic novel of manners, following Elizabeth Bennet and Mr. Darcy.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    price: "$9",
    rating: 4.8,
    pageUrl: "/books/pride-and-prejudice",
  },
];
