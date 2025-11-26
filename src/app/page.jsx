"use client";

import Loading from "@/components/Loading";
import Banner from "../components/Banner";
import Features from "../components/Features";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/items?latest=3")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="h-full font-sans">
      <main className="container mx-auto space-y-8">
        <Banner />
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold mb-10 text-left">
            Latest Products
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No products found.
              </p>
            )}
          </div>
        </section>
        <Features />
      </main>
    </div>
  );
}
