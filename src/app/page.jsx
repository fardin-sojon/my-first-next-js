"use client";

import Banner from "@/components/Banner";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import TeamMember from "@/components/TeamMember";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="h-full font-sans">
      <main className="container mx-auto space-y-8">
        <Banner />
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold mb-10 text-left">Top Products</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products
              .filter((p) => p.priority === "high")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>
        <Features />
        <TeamMember />
      </main>
    </div>
  );
}
