"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto my-10 px-5">
      <h2 className="text-3xl font-bold text-center my-10">All Products</h2>

      {/* Search + Category inline */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10 items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-1/2 md:w-1/4 text-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded sm:w-full md:w-1/6 text-sm"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
