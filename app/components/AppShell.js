"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useAuth } from "./AuthProvider";

/**
 * AppShell — shared client wrapper for all authenticated pages.
 *
 * Auth guard behaviour:
 *   • While auth state loads  → shows a full-screen skeleton loader (prevents flash)
 *   • Not logged in           → redirects to / (landing page)
 *   • Logged in               → renders normally
 */
export default function AppShell({ children, searchPlaceholder }) {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.replace("/");
    }
  }, [isLoading, isLoggedIn, router]);

  // ── Loading state: full-screen branded skeleton ───────────────────────
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-[9999]">
        <div className="flex flex-col items-center gap-lg">
          <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center animate-pulse">
            <span
              className="material-symbols-outlined text-on-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              account_balance
            </span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
            Loading terminal…
          </p>
        </div>
      </div>
    );
  }

  // ── Not logged in: render nothing while redirect fires ────────────────
  if (!isLoggedIn) return null;

  // ── Authenticated: render full shell ──────────────────────────────────
  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — offset by sidebar width on desktop */}
      <div className="flex-grow flex flex-col md:ml-64 w-full h-screen overflow-y-auto bg-background">
        <TopBar
          searchPlaceholder={searchPlaceholder}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {children}
      </div>
    </div>
  );
}
