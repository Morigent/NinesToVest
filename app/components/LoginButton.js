"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

/**
 * Hero "Launch Terminal" button on the landing page.
 * Logs the user in with default demo credentials and
 * navigates to /dashboard.
 */
export default function LoginButton({ className, children }) {
  const { login } = useAuth();
  const router = useRouter();

  function handleClick() {
    login(); // sets auth in localStorage with default demo user
    router.push("/dashboard");
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
