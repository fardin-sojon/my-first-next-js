"use client";

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email!");
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="bg-blue-50 text-gray-700 py-12 px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Services */}
        <div>
          <h6 className="text-blue-600 font-bold mb-3">Services</h6>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-blue-700 transition cursor-pointer">Branding</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Design</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Marketing</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Advertisement</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-blue-600 font-bold mb-3">Company</h6>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-blue-700 transition cursor-pointer">About Us</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Contact</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Jobs</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Press Kit</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-blue-600 font-bold mb-3">Legal</h6>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-blue-700 transition cursor-pointer">Terms of Use</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Cookie Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-blue-600 font-bold mb-3">Newsletter</h6>
          <p className="text-sm text-gray-600 mb-2">
            Subscribe for latest updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-lg border border-blue-400 focus:outline-none focus:border-blue-600 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-blue-600 text-lg">
            <FaFacebookF className="hover:text-blue-800 transition cursor-pointer" />
            <FaTwitter className="hover:text-blue-800 transition cursor-pointer" />
            <FaInstagram className="hover:text-blue-800 transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-800 transition cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-600 font-semibold">ShopEase</span> — All rights reserved.
      </div>
    </footer>
  );
}
