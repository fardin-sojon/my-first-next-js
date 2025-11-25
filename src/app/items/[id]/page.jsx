"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, Tag, Package, ArrowLeft } from "lucide-react";

export default function ItemDetails() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p.id === Number(params.id));
        setProduct(p);
      });
  }, [params.id]);

  if (!product)
    return <p className="text-center pt-20 text-xl">Product Not Found</p>;

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-200">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Product Image */}
          <div className="relative group">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-indigo-600 text-white text-sm px-4 py-1 rounded-full shadow-lg">
              {product.category}
            </span>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-gray-800 leading-snug">
              {product.title}
            </h1>

            <p className="text-gray-700 text-lg mb-6">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <Star className="text-yellow-500" />
              <span className="text-lg font-semibold text-gray-800">
                {product.rating} / 5
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-gray-800">
              <DetailBox label="Price" value={`$${product.price}`} />
              <DetailBox label="Stock" value={product.stock} />
              <DetailBox label="Added On" value={product.dateAdded} />
              <DetailBox label="Priority" value={product.priority} />
            </div>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-3">
              {product.tags.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag size={14} />
                  {t}
                </span>
              ))}
            </div>

            {/* Back Button */}
            <Link
              href="/items"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow-md transition text-lg font-medium"
            >
              <ArrowLeft size={20} /> Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBox({ label, value }) {
  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
