import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={null}>
        <HomeClient products={products} />
      </Suspense>
      <Footer />
    </main>
  );
}
