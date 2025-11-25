"use client";
import React from "react";
import { FaCheckCircle, FaShippingFast, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Quality Products",
    desc: "Our items are selected and tested to ensure premium quality every time.",
    icon: <FaCheckCircle className="text-indigo-700 w-10 h-10 mb-4 mx-auto md:mx-0" />,
  },
  {
    title: "Fast Delivery",
    desc: "We make sure your order reaches you quickly and safely.",
    icon: <FaShippingFast className="text-indigo-700 w-10 h-10 mb-4 mx-auto md:mx-0" />,
  },
  {
    title: "Trusted Support",
    desc: "Our support team is active 24/7 to help with any issues.",
    icon: <FaHeadset className="text-indigo-700 w-10 h-10 mb-4 mx-auto md:mx-0" />,
  },
];

export default function Features() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
