"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent border-t-4 border-solid rounded-full animate-spin mb-4"></div>

      {/* Loading text */}
      <p className="text-xl font-semibold text-blue-700 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
