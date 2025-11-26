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
      const redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
      router.replace(`/login?redirect=${redirectUrl}`);
    }
  }, [loading, user, router]);

  if (loading) return <Loading />;
  if (!user) return null; 

  return <>{children}</>;
}
