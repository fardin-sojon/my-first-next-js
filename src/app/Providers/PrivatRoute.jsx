"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hooks/useAuth"; 
import Loading from "@/Components/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); 
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <Loading/>
  
  }

  return <>{children}</>; 
}
