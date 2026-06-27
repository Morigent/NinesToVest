"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navItems = [
  { href: "/dashboard",    icon: "dashboard",         label: "Dashboard" },
  { href: "/analytics",    icon: "analytics",         label: "Analytics" },
  { href: "/transactions", icon: "receipt_long",      label: "Transactions" },
  { href: "/allocation",   icon: "pie_chart",         label: "Allocation" },
  { href: "/dca-settings", icon: "repeat",            label: "Recurring" },
  { href: "/subscription", icon: "payments",          label: "Subscriptions" },
  { href: "/daily-recap",  icon: "today",             label: "Daily Recap" },
];

const bottomItems = [
  { href: "#", icon: "rate_review",  label: "Feedback" },
  { href: "#", icon: "settings",     label: "Settings" },
  { href: "#", icon: "help_center",  label: "Help Desk" },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    onClose?.();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="flex items-center gap-md mb-xl px-sm">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <span
            className="material-symbols-outlined text-on-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            account_balance
          </span>
        </div>
        <div>
          <h1 className="font-headline-sm text-headline-sm font-bold text-primary">NinesToVest</h1>
          <p className="font-label-md text-label-md text-on-surface-variant opacity-70">Institutional Grade</p>
        </div>
        {/* Close button — mobile only */}
        <button
          onClick={onClose}
          className="ml-auto md:hidden p-1 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col gap-xs flex-grow">
        {navItems.map(({ href, icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-md px-md py-sm rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
              }`}
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-label-md text-label-md">{label}</span>
            </Link>
          );
        })}

        {/* Bottom Nav */}
        <div className="mt-auto flex flex-col gap-xs">
          {bottomItems.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors rounded-xl"
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-label-md text-label-md">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );

  return (
    <>
      {/* ── Desktop Sidebar (always visible on md+) ─────────────── */}
      <aside className="fixed left-0 top-0 h-screen w-64 flex-shrink-0 flex flex-col p-md bg-surface-container border-r border-outline-variant z-40 hidden md:flex">
        {sidebarContent}
      </aside>

      {/* ── Mobile Drawer ────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 flex-shrink-0 flex flex-col p-md bg-surface-container border-r border-outline-variant z-[60] md:hidden
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        {sidebarContent}
      </aside>
    </>
  );
}
