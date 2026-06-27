"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";

// Tiny RFC-5322-ish email regex — good enough for UX validation
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailCTA() {
  const { login } = useAuth();
  const router = useRouter();
  const [email,   setEmail]   = useState("");
  const [error,   setError]   = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your professional email address.");
      setSuccess(false);
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError("Please enter a valid email address (e.g. alex@firm.com).");
      setSuccess(false);
      return;
    }

    // All good — log in and go to dashboard
    setError("");
    setSuccess(true);
    login({ email: email.trim() });
    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col items-center gap-sm w-full">
      <div className="flex flex-col sm:flex-row gap-md justify-center w-full">
        <div className="flex flex-col gap-xs flex-grow max-w-[360px]">
          <input
            id="cta-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="Enter professional email"
            aria-invalid={!!error}
            aria-describedby="cta-email-error"
            className={`w-full bg-surface-container border rounded-xl px-md py-md focus:ring-2 outline-none transition-all ${
              error
                ? "border-error focus:ring-error bg-error/5"
                : "border-outline-variant focus:ring-primary"
            }`}
          />
          {/* Inline error */}
          {error && (
            <p
              id="cta-email-error"
              role="alert"
              className="flex items-center gap-xs text-[11px] text-error font-medium"
            >
              <span className="material-symbols-outlined text-[14px]">error</span>
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="px-xl py-md bg-primary text-on-primary rounded-xl font-bold whitespace-nowrap hover:brightness-110 transition-all self-start sm:self-auto"
        >
          Get Access
        </button>
      </div>

      {/* Success message */}
      {success && (
        <p
          role="status"
          className="flex items-center gap-xs text-sm text-primary font-medium mt-xs"
        >
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          You're on the list! We'll be in touch soon.
        </p>
      )}
    </form>
  );
}
