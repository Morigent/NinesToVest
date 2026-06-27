"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

/**
 * Invisible client component mounted in the landing page.
 * Once auth state is hydrated from localStorage, if the user
 * is already logged in it immediately redirects them to /dashboard.
 */
export default function LandingAuthRedirect() {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      router.replace("/dashboard");
    }
  }, [isLoading, isLoggedIn, router]);

  // Renders nothing — purely a side-effect component
  return null;
}
