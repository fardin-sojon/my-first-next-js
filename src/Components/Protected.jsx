'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";
import useAuth from "@/app/hooks/useAuth";

export default function Protected({ children }) {
  const { user, loading } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) return <Loading />;
  if (!user) return null;

  return <>{children}</>;
}
