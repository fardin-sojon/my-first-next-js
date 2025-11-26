"use client";

import TeamMember from "@/components/TeamMember";
import Image from "next/image";
import React from "react";

export default function About() {


  return (
    <div className="container mx-auto py-14 px-5 space-y-20">
      {/* Our Company */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          About Our Company
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          We build modern digital shopping experiences focused on quality,
          speed, and user satisfaction.
        </p>
      </section>

      {/* Who We Are */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold mb-3 text-gray-800">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            We are a modern e-commerce platform dedicated to bringing top-tier
            products at the best prices. Our focus is on smooth performance,
            clean UI, and high-level user experience.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our goal is simple — provide a seamless shopping journey where
            quality meets convenience.
          </p>
        </div>

        {/* Right Image Box */}
        <div className=" h-64 md:h-80 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about.png"
            alt="Banner"
            width={800}
            height={400}
            className="object-cover rounded-2xl"
          />
        </div>
      </section>
      {/* Our Team */}
      <section>
        <TeamMember />
      </section>
    </div>
  );
}
