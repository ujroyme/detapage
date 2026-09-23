# Findly — Product Directory (Homepage v1)

A homepage/product-directory built with Next.js (App Router), TypeScript,
and Tailwind CSS. This version deliberately covers **only** the homepage
and product routing — no backend, database, auth, or admin dashboard.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/
  page.tsx              → homepage
  layout.tsx             → root layout, fonts
  globals.css
  [category]/[slug]/page.tsx → placeholder product page at
                             /<categorySlug>/<slug> (used until a real
                             page exists for that product)

components/
  Header.tsx
  Hero.tsx
  CategoryList.tsx
  SearchBar.tsx
  ProductCard.tsx
  ProductGrid.tsx
  HomeClient.tsx          → client-side search/filter state
  Footer.tsx

data/
  products.ts             → sample product data (id, name, slug, category,
                             categorySlug, description, image, price,
                             rating, pageUrl)
  categories.ts            → category list (name, slug, emoji), easy to extend
```

## URL structure

Every product lives at `/<categorySlug>/<slug>`, e.g.:

```
/books/pride-and-prejudice
/mobile/samsung-galaxy-s25-ultra
/cars/toyota-camry
```

`categorySlug` comes from `data/categories.ts` and `slug` from the
product's entry in `data/products.ts`.

## Adding a product

Add an entry to `data/products.ts`, including a `categorySlug` that
matches one of the slugs in `data/categories.ts`, and a `pageUrl` of
`/<categorySlug>/<slug>`. The homepage card, search, category filter, and
routing all pick it up automatically — nothing else needs to change.

## Giving a product its own real page

Right now every product resolves to the placeholder at
`app/[category]/[slug]/page.tsx` ("This product page is being
prepared.").

To replace it for one product, create a static route that matches its
category and slug exactly, e.g.:

```
app/books/pride-and-prejudice/page.tsx
```

Next.js will automatically use that specific page instead of the
`[category]/[slug]` placeholder for that one URL — the homepage card
already links to `/books/pride-and-prejudice`, so no other files need to
change. This is the intended workflow for prompts like "Create the page
for Pride and Prejudice."

## Not included (by design)

Authentication, payments/checkout, a real database, an admin dashboard,
user accounts, reviews, analytics, affiliate management, and
recommendation engines are all out of scope for this version.
