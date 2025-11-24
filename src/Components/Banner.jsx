"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerImg from "../../public/asserts/banner-prodects.png"

export default function Banner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-b-2xl">
      <div className=" px-15 text-center lg:text-left flex flex-col md:flex-row items-center justify-between container mx-auto">
        
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">ShopEase</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Discover amazing products and deals every day. Your ultimate shopping experience starts here!
          </p>
          <div className="flex  sm:flex-row gap-4 justify-center lg:justify-start w-[40%] md:w-full mx-auto">
            <Link
              href="/items"
              className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg shadow-lg transition"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={BannerImg}
            alt="Banner"
            width={600}  
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
