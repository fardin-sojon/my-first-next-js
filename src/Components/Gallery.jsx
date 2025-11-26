"use client";

import React from "react";
import Image from "next/image";

function Gallery() {
  return (
    <section className="text-center bg-white">
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore our exclusive collection of products — from the latest arrivals
        to our bestsellers. Every item is crafted to inspire and delight.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto px-4">
        {/* Left column */}
        <div className="md:col-span-1 overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/gallery/gallery4.jpg"
            alt="Community activity"
            width={500}
            height={660}
            className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Middle column */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/gallery1.jpg"
              alt="Donation event"
              width={500}
              height={320}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/gallery5.jpg"
              alt="Tree plantation"
              width={500}
              height={320}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/gallery3.webp"
              alt="Cleaning program"
              width={500}
              height={280}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/gallery/gallery2.jpg"
              alt="Plantation event"
              width={500}
              height={390}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
