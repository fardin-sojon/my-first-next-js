"use client";

import { Frown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (window.history.length > 1) {
      setCanGoBack(true);
    }
  }, []);

  const handleBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push("/"); 
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white p-6">
      <div className="my-20 p-10 rounded-3xl flex flex-col items-center max-w-md text-center animate-fadeIn">
        <Frown className="w-24 h-24 text-blue-600 animate-bounce" />
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3 tracking-wide">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-6">
          Oops! The page you're looking for doesn't exist or was moved.
        </p>
        <button
          onClick={handleBack}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
