"use client"; 

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success(`${data.email} 
            Subscribe Successful!`);
    reset();
  };

  return (
    <section className="py-16 md:w-3xl mx-auto bg-blue-50 shadow-xl text-center rounded-2xl">
      <h2 className="text-3xl font-bold mb-4 text-black">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-8 text-gray-700 dark:text-gray-400">
        Stay updated with upcoming social events and community news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
          className="w-full p-3 rounded-l-lg border text-black  border-blue-600  focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 cursor-pointer hover:bg-blue-700  font-semibold text-white px-6 rounded-r-lg"
        >
          Subscribe
        </button>
      </form>
      {errors.email && (
        <p className="mt-2 text-red-500">{errors.email.message}</p>
      )}
    </section>
  );
}

export default Newsletter;
