"use client";
import Protected from "@/Components/Protected";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "@/app/hooks/useAuth";
import { Star } from "lucide-react";

export default function AddProduct() {
  const { user } = useAuth();
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const [ratingHover, setRatingHover] = useState(0);
  const rating = watch("rating") || 0;

  const categories = [
  "Electronics",
  "Digital Art",
  "Painting",
  "Photography",
  "Sculpture",
  "Fashion",
  "Books",
  "Sports ",
  "Toys",
  "Digital Products",
  "Gadgets",
];
  const priorities = ["high", "medium", "low"];

  const onSubmit = async (data) => {
    try {
      const tagsArray = data.tags ? data.tags.split(",").map((t) => t.trim()) : [];
      const payload = {
        ...data,
        tags: tagsArray,
        dateAdded: new Date(),
        userEmail: user.email,
        userName: user.displayName || "",
        userPhoto: user.photoURL || "",
      };

      await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      reset(); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Protected>
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Add New Product</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto space-y-6 bg-white p-8 rounded-3xl shadow-2xl border border-gray-200"
        >
          <input type="text" placeholder="Title" {...register("title", { required: true })} className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" />
          <input type="text" placeholder="Short Description" {...register("shortDesc", { required: true })} className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Description" {...register("description", { required: true })} className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" />

          <div className="grid grid-cols-2 gap-4">
            <input type="number" step="0.01" placeholder="Price" {...register("price", { required: true })} className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" />
            <input type="number" placeholder="Stock" {...register("stock", { required: true })} className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" />
          </div>

          <input type="text" placeholder="Image URL" {...register("image", { required: true })} className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" />

          {/* Category Select */}
          <div>
            <p className="mb-2 font-semibold">Category:</p>
            <select {...register("category", { required: true })} className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" defaultValue="">
              <option value="" disabled>Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Priority */}
          <div>
            <p className="mb-2 font-semibold">Priority:</p>
            <div className="flex gap-2">
              {priorities.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setValue("priority", p)}
                  className={`px-4 py-1 rounded-full border transition ${
                    watch("priority") === p
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-100"
                  }`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <p className="mb-2 font-semibold">Rating:</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={24}
                  className={`cursor-pointer transition ${
                    i <= (ratingHover || rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  onMouseEnter={() => setRatingHover(i)}
                  onMouseLeave={() => setRatingHover(0)}
                  onClick={() => setValue("rating", i)}
                />
              ))}
            </div>
          </div>

          <input type="text" placeholder="Tags (comma separated)" {...register("tags")} className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400" />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition text-lg font-semibold">
            Add Product
          </button>
        </form>
      </div>
    </Protected>
  );
}
