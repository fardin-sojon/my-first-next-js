import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-2xl transition bg-white overflow-hidden p-5">
      <div className="relative w-full h-54">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
        <p className="text-gray-600 mb-2">{product.shortDesc}</p>
        <p className="font-bold mb-4">${product.price}</p>
        <Link
          href={`/items/${product.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
