"use client";
import Protected from "@/Components/Protected";
import React, { useEffect, useState } from "react";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { Trash2, Eye, LayoutGrid, Table } from "lucide-react";
import Loading from "@/Components/Loading";
import Swal from "sweetalert2";
import Image from "next/image";

export default function ManageProduct() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("table"); 

  // Fetching
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/items");
      const data = await res.json();

      const userProducts = data.filter((p) => p.userEmail === user.email);
      setProducts(userProducts);
    } finally {
      setLoading(false);
    }
  };

  // DELETE 
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`/api/items?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          Swal.fire("Deleted!", "Product removed successfully.", "success");
          setProducts(products.filter((p) => p._id !== id));
        } else {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [user,fetchProducts]);

  if (loading) return <Loading />;
  if (!products.length)
    return <p className="text-center py-10">No products found.</p>;

  return (
    <Protected>
      <div className="container mx-auto px-5 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">Manage Products</h2>

          {/* View Toggle */}
          <div className="flex gap-3 bg-gray-100 px-3 py-2 rounded-xl shadow-sm">
            <button
              onClick={() => setView("table")}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition ${
                view === "table"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Table size={18} />
            </button>

            <button
              onClick={() => setView("card")}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg transition ${
                view === "card"
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </div>

        {/* TABLE VIEW */}
        {view === "table" && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow-xl border">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-5 py-4 text-center">Image</th>
                  <th className="px-5 py-4 text-left">Title</th>
                  <th className="px-5 py-4 text-left">Category</th>
                  <th className="px-5 py-4 text-center">Price</th>
                  <th className="px-5 py-4 text-center">Stock</th>
                  <th className="px-5 py-4 text-center">Priority</th>
                  <th className="px-5 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-5 py-4 text-center">
                      <Image
                        src={product.image || "/placeholder.png"}
                        alt={product.title}
                        width={80}
                        height={80}
                        className="rounded-sm object-cover mx-auto shadow"
                      />
                    </td>
                    <td className="px-5 py-4 font-medium">{product.title}</td>
                    <td className="px-5 py-4">{product.category}</td>
                    <td className="px-5 py-4 text-center">${product.price}</td>
                    <td className="px-5 py-4 text-center">{product.stock}</td>
                    <td className="px-5 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-lg font-semibold ${
                          product.priority.toLowerCase() === "high"
                            ? "bg-blue-100 text-blue-700"
                            : product.priority.toLowerCase() === "medium"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.priority}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-center flex justify-center gap-4">
                      <Link
                        href={`/items/${product._id}`}
                        className="text-blue-600 hover:scale-110 transition"
                      >
                        <Eye size={20} />
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-600 hover:scale-110 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* CARD VIEW */}
        {view === "card" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-2xl p-5 border hover:shadow-2xl transition"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={192}
                  className="rounded-xl mb-4 shadow object-cover"
                />

                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Category:{" "}
                  <span className="font-medium">{product.category}</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Price: <span className="font-medium">${product.price}</span>
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Stock: {product.stock}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <Link
                    href={`/items/${product._id}`}
                    className="text-blue-600 flex items-center gap-1"
                  >
                    <Eye size={18} /> View
                  </Link>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-600 flex items-center gap-1"
                  >
                    <Trash2 size={18} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Protected>
  );
}
